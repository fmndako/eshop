const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const feedbackComment = new Schema({
    comment: String,
    feedback: {
        type: Schema.Types.ObjectId,
        ref: 'CustomerFeedbacks'
    },
    image: {
        data: Buffer,
        contentType: String
    },
    comment: String
});

module.exports = mongoose.model('feedbackComments', feedbackComment);