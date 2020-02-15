const mongoose = require('mongoose');
const { Schema } = mongoose;

const Order = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
    },
    discount: {
        type: Schema.Types.ObjectId,
        ref: 'Discount'
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
});

module.exports = mongoose.model('Order', Order);
