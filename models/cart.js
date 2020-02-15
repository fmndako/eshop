const mongoose = require('mongoose')
const { Schema } = mongoose

const Cart = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
})

module.exports = mongoose.model('Cart', Cart)