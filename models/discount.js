const mongoose = require('mongoose');
const { Schema } = mongoose;

const Discount = new Schema({
    percent: String,
    created: Date,
    endDate: Date,
    startDate: Date,
});

module.exports = mongoose.model('Discount', Discount);
