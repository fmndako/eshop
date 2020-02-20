const mongoose = require('mongoose');
const { Schema } = mongoose;

const Payment = new Schema({
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    },
    amount: Number,
    date: Date,
    method: String,
    methodId: String,
    status: String
});

module.exports = mongoose.model('Payment', Payment);
