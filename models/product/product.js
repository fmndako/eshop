const mongoose = require('mongoose')

const { Schema } = mongoose
const Product = new Schema({
    product: String,
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
        ref: 'Ratings'
    },
    status: String

})

module.exports = mongoose.model('Products', Product)
