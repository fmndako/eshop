const mongoose = require('mongoose');
const { Schema } = mongoose;

const Shipping = new Schema({
    method: String,
    unitPrice: Number,
    estimatedDeliveryPeriod: Number,
    free: Boolean,
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    status: String,
    default: Boolean
});

module.exports = mongoose.model('Shipping', Shipping);
