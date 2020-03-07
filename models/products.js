const mongoose = require('mongoose');
const { Schema } = mongoose;

const Product = new Schema({
    sku: String,
    name: String,
    stock: String,
    price: Number,
    shortDescription: String,
    longDescription: String,
    videoUrl: String,
    status: String,
    store: {
        type: Schema.Types.ObjectId,
        ref: 'Store'
    },
    merchant: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    discount: {
        type: Schema.Types.ObjectId,
        ref: 'Discount'
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    images: [{
        file: String,
        type: String
    }],
});

module.exports = mongoose.model('Product', Product);
