const mongoose = require('mongoose')

const { Schema } = mongoose
const ProductDetail = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    Size: String,
    amount: Number,
    color: String,
    image: {
        data: Buffer,
        contentType: String
    },
    description: String,
})

module.exports = mongoose.model('ProductDetail ', ProductDetail)