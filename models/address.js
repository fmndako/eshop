const mongoose = require('mongoose');
const { Schema } = mongoose;

const address = new Schema({
    streetAddress: String,
    lga: String,
    state: String,
    country: String,
});

module.exports = mongoose.model('address', address);