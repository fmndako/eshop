const mongoose = require('mongoose')

const { Schema } = mongoose
const Product = new Schema({
    sku: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    name: String,
    price: Number,
    video_url: String,
    rating: {
        type: Schema.Types.ObjectId,
        ref: 'Rating'
    },
    status: String

})

module.exports = mongoose.model('Product', Product)
