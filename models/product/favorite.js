const mongoose = require('mongoose')

const { Schema } = mongoose
const Favorite = new Schema({
    favorite: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    productDetail:{
        type: Schema.Types.ObjectId,
        ref: 'ProductDetails'
    },
    timeAdded: Date,
})

module.exports = mongoose.model('Favorites', Favorite)
