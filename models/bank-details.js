const mongoose = require('mongoose');
const { Schema } = mongoose;

const BankDetail = new Schema({
    accountName: String,
    accountNumber: String,
    type: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('BankDetail', BankDetail);
