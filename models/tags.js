const mongoose = require('mongoose');
const { Schema } = mongoose;

const Tag = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    tag: String
});

module.exports = mongoose.model('Tag', Tag);
    