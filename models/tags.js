const mongoose = require('mongoose');
const { Schema } = mongoose;

const Tag = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    name: String
});

module.exports = mongoose.model('Tag', Tag);
    