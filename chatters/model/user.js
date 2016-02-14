var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var ts = require('mongoose-timestamp');

var User = new Schema({
  username: String,
  password: String
});

User.plugin(passportLocalMongoose);
User.plugin(ts);

module.exports = mongoose.model('User', User);
