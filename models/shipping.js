const mongoose = require('mongoose');
const { Schema } = mongoose;

const Shipping = new Schema({
    company: String,
    amount: Number,
    free: Boolean,
    date: Date,
    status: String,
});

module.exports = mongoose.model('Shipping', Shipping);
