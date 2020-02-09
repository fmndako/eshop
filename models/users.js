var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var User   = new Schema({
    lastName: String,
    firstName: String,
    username: String,
    email: String,
    verified: { type: Boolean, default: 'false' },
    dateCreated: {type: Date, default: Date.Now}

});

module.exports = mongoose.model('user', User);