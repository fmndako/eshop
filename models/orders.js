const mongoose = require('mongoose');
const { Schema } = mongoose;

const Order = new Schema({
    created: String,
    status: String,
    amount: Number,
    shipped: Boolean,
    tracking: {
        type: Schema.Types.ObjectId,
        ref: 'Shipping'
    }, 
    merchant: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
    }
});

module.exports = mongoose.model('Order', Order);
