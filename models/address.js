const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const address = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    streetAddress: String,
    state: String,
    additionalDetails: String,
});

module.exports = mongoose.model('address', address);