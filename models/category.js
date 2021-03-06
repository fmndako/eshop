const mongoose = require('mongoose');
const { Schema } = mongoose;

const Category = new Schema({
    name: String,
    description: String,
    subCategory: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },

});

module.exports = mongoose.model('Category', Category);
