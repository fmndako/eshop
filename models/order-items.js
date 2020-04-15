const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderItem = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    productDetail: {
        type: Schema.Types.ObjectId,
        ref: 'ProductDetail'
    },
    savedForLater: Boolean,
    quantity: Number,
    timeAdded: Date,
    checkedOut: Boolean,
    shipped: Boolean,
    shipping: {
        type: Schema.Types.ObjectId,
        ref: 'Shipping'
    } 
});

module.exports = mongoose.model('OrderItem', OrderItem);
