const mongoose = require('mongoose')

const {
    Schema
} = mongoose
const Order = new Schema({
    order: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: 'Addresses'
    },
    discount: {
        type: Schema.Types.ObjectId,
        ref: 'Discounts'
    },
    created: String,
    modified: {
        data: Buffer,
        contentType: String
    },
    status: String,
    amount: Number,
    shipped: Boolean,
    trackingId: String
})

module.exports = mongoose.model('Orders', Order)