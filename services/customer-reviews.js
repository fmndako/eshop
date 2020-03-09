const CustomerReview = require('../models/customer-review');
const {
    ErrorHandler
} = require('../utilities/error');

class CustomerReviewService {
    async getReview(reviewId) {
        try {
            return await CustomerReview.findOne({
                '_id': reviewId
            }).populate('user product');
        } catch (e) {
            throw new ErrorHandler(400, 'Can not find review');
        }
    }
    async getAllReviews(query, page, limit) {
        try {
            var review = await CustomerReview.find(query).populate('user product').skip(page).limit(limit);
            return review;
        } catch (e) {
            throw new ErrorHandler(400, 'Error paginating customer reviews');
        }
    }
    async creatReview(body) {
        try {
            let newReview = new CustomerReview();
            Object.keys(body).forEach(k => {
                newReview[k] = body[k];
            });
            return await newReview.save();
        } catch (err) {
            throw new ErrorHandler(400, err);
        }
    }

    async updateReview(reviewId, body) {
        try {
            let review = await CustomerReview.findOne({
                '_id': reviewId
            });
            Object.keys(body).forEach(k => {
                if (k !== '__v' && k !== '_id') {
                    review[k] = body[k];
                }
            });
            return review.save();
        } catch (err) {
            throw new ErrorHandler(400, 'Error updating review');
        }
    }

    async deleteReview(reviewId) {
        try {
            return await CustomerReview.deleteOne({
                '_id': reviewId
            });
        } catch (err) {
            throw new ErrorHandler(400, 'Error deleteing review');
        }
    }
}
module.exports = new CustomerReviewService();