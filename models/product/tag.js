const mongoose = require('mongoose')

const { Schema } = mongoose
const Tag = new Schema({
    tag: String,
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Products'
    },
    tag: String
})

module.exports = mongoose.model('Tags', Tag)
    