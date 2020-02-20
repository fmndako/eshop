const mongoose = require('mongoose');
const { Schema } = mongoose;

const Store = new Schema({
    name: String,
    address: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
    },
    merchant: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    bankDetail: {
        type: Schema.Types.ObjectId,
        ref: 'BankDetail'
    }
});

module.exports = mongoose.model('Product', Product);
