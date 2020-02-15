const mongoose = require('mongoose')
const { Schema } = mongoose

const CartItem = new Schema({
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'Cart'
    },
    productDetail: {
        type: Schema.Types.ObjectId,
        ref: 'ProductDetail'
    },
    savedForLater: Boolean,
    quantity: Number,
    timeAdded: Date,
})

module.exports = mongoose.model('CartItem', CartItem)
