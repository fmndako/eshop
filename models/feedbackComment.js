const mongoose = require('mongoose');
const { Schema } = mongoose;

const feedbackComment = new Schema({
    image:  {
        type: Schema.Types.ObjectId,
        ref: 'Image'
    },
    comment: String
});

module.exports = mongoose.model('feedbackComments', feedbackComment);