const mongoose = require('mongoose');
const { Schema } = mongoose;

const Image = new Schema({
    link: String,
    name: String,
    imageType: String

});

module.exports = mongoose.model('Image', Image);
    