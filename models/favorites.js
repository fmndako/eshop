const mongoose = require('mongoose')

const { Schema } = mongoose
const Favorite = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    product:{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    timeAdded: Date,
})

module.exports = mongoose.model('Favorite', Favorite)
