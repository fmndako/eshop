const mongoose = require('mongoose')

const {
    Schema
} = mongoose
const CartItem = new Schema({
    cartItem: String,
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'Carts'
    },
    productDetail: {
        type: Schema.Types.ObjectId,
        ref: 'ProductDetails'
    },
    savedForLater: Boolean,
    quantity: Number,
    timeAdded: Date,
})

module.exports = mongoose.model('CartItem', CartItem)