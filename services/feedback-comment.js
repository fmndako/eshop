const FeedbackComment = require('../models/feedbackComment');
const {
    ErrorHandler
} = require('../utilities/error');

class FeedbackCommentService {
    async getComment(commentId) {
        try {
            return await FeedbackComment.findOne({
                '_id': commentId
            });
        } catch (e) {
            throw new ErrorHandler(400, 'Can not find feedback comment');
        }
    }
    async getAllComments(query, page, limit) {
        try {
            var comment = await FeedbackComment.find(query).skip(page).limit(limit);
            return comment;
        } catch (e) {
            throw new ErrorHandler(400, 'Error paginating feedback comments');
        }
    }
    async creatComment(body) {
        try {
            let newcomment = new FeedbackComment();
            Object.keys(body).forEach(k => {
                newcomment[k] = body[k];
            });
            return await newcomment.save();
        } catch (err) {
            throw new ErrorHandler(400, err);
        }
    }

    async updateComment(commentId, body) {
        try {
            let comment = await FeedbackComment.findOne({
                '_id': commentId
            });
            Object.keys(body).forEach(k => {
                if (k !== '__v' && k !== '_id') {
                    comment[k] = body[k];
                }
            });
            return comment.save();
        } catch (err) {
            throw new ErrorHandler(400, 'Error updating feedback comment');
        }
    }

    async deleteComment(commentId) {
        try {
            return await FeedbackComment.deleteOne({
                '_id': commentId
            });
        } catch (err) {
            throw new ErrorHandler(400, 'Error deleteing feedback comment');
        }
    }
}
module.exports = new FeedbackCommentService();