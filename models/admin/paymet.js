const mongoose = require('mongoose')

const {
    Schema
} = mongoose
const Payment = new Schema({
    payment: String,
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Orders'
    },
    amount: Number,
    date: Date,
})

module.exports = mongoose.model('Payments', Payment)