const mongoose = require('mongoose');
const { Schema } = mongoose;

const SubCategory = new Schema({
    male: Boolean,
    female: Boolean,
});

module.exports = mongoose.model('SubCategory', SubCategory);
