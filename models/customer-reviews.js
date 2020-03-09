const mongoose = require('mongoose');
const { Schema } = mongoose;

const CustomerReview = new Schema({
    rating: Number,
    comment: String,
    date: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    images: [{
        filename: String,
        type: String
    }]
});

module.exports = mongoose.model('CustomerReview', CustomerReview);