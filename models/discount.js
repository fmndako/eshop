const mongoose = require('mongoose');
const { Schema } = mongoose;

const Discount = new Schema({
    name: {
        type: Schema.Types.ObjectId,
        ref: 'accountDetail',
    },
    discount: String,
    type: String,
    created: String,
    valid: String,
    quanity: String,

});

module.exports = mongoose.model('Discount', Discount);
