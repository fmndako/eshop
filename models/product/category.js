const mongoose = require('mongoose')

const { Schema } = mongoose
const Category = new Schema({
    category: String,
    name: String
})

module.exports = mongoose.model('Category', Category)
