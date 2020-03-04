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
        type: Schema.Types.ObjectId,
        ref: 'Image'
    }]
});

module.exports = mongoose.model('CustomerReview', CustomerReview);