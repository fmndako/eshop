const mongoose = require('mongoose')
const { Schema } = mongoose

const OrderItem = new Schema({
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    },
    productDetail: {
        type: Schema.Types.ObjectId,
        ref: 'ProductDetail'
    },
    quatity: Number
})

module.exports = mongoose.model('OrderItem', OrderItem)
