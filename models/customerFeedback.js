const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const CustomerFeedback = new Schema({
    feedback: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    subject: String,
    date: Date,
});

module.exports = mongoose.model('CustomerFeedbacks', CustomerFeedback);