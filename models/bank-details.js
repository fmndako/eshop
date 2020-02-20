const mongoose = require('mongoose');
const { Schema } = mongoose;

const BankDetail = new Schema({
    accountName: String,
    accountNumber: String,
    type: String
});

module.exports = mongoose.model('BankDetail', BankDetail);
