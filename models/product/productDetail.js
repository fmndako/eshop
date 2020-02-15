const mongoose = require('mongoose')

const { Schema } = mongoose
const ProductDetail = new Schema({
    productDetail: String,
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Products'
    },
    Size: String,
    amount: Number,
    color: String,
    image: {
        data: Buffer,
        contentType: String
    },
    description: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },

})

module.exports = mongoose.model('ProductDetails ', ProductDetail)
