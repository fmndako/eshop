const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductDetail = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    specifications: [{
        type: String,
        value: String}
    ],
    images: [{
        file: String,
        type: String
    }],
    description: String,
    type: String
});

module.exports = mongoose.model('ProductDetail ', ProductDetail);
