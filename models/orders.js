const mongoose = require('mongoose');
const { Schema } = mongoose;

const Order = new Schema({
    date: Date,
    status: String,
    amount: Number,
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
