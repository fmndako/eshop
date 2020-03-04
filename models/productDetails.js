const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductDetail = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    size: String,
    amount: Number,
    color: String,
    images: [{
        data: Buffer,
        contentType: String
    }],
    description: String,
});

module.exports = mongoose.model('ProductDetail ', ProductDetail);
