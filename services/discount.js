var Discount = require('../models/discount');
const { ErrorHandler } = require('../utilities/error');

class DiscountService {
    async getDiscount(discountId) {
        try {
            return await Discount.findOne({ '_id': discountId });
        } catch (e) {
            throw new ErrorHandler(400, 'Error while Paginating Discount');
        }
    }
    async getDiscounts(query, page, limit) {
        try {
            var discounts = await Discount.find(query).skip(page).limit(limit);
            return discounts;
        } catch (e) {
            throw new ErrorHandler(400, 'Error while Paginating Discount');
        }
    }
    async createDiscount(body) {
        try {
            let newDiscount = new Discount();
            Object.keys(body).forEach(k => {
                newDiscount[k] = body[k];
            });
            return await newDiscount.save();
        }
        catch (err) {
            throw new ErrorHandler(400, err);
        }
    }

    async updateDiscount(discountId, body) {
        try {
            let discount = await Discount.findOne({ '_id': discountId });
            Object.keys(body).forEach(k => {
                if (k !== '__v' && k !== '_id') {
                    discount[k] = body[k];
                }
            });
            return discount.save();
        }
        catch (err) {
            throw new ErrorHandler(400, 'Error updating Discount');
        }
    }

    async deleteDiscount(discountId) {
        try {
            return await Discount.deleteOne({ '_id': discountId });
        }
        catch (err) {
            throw new ErrorHandler(400, 'Error Deleteing Discount');
        }
    }
}

module.exports = new DiscountService();