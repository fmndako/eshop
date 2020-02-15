const mongoose = require('mongoose')

const {
    Schema
} = mongoose
const OrderItem = new Schema({
    orderItem: String,
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    },
    productDetail: {
        type: Schema.Types.ObjectId,
        ref: 'ProductDetails'
    },
    quatity: Number
})

module.exports = mongoose.model('OrderItems', OrderItem)