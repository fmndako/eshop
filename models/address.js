const mongoose = require('mongoose');
const { Schema } = mongoose;

const Address = new Schema({
    streetAddress: String,
    lga: String,
    state: String,
    country: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Address', Address);