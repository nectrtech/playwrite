var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ts = require('mongoose-timestamp');

var Message = new Schema({
  room: Schema.Types.ObjectId,
  messages: [Schema.Types.Mixed]
});

Message.plugin(ts);

module.exports = mongoose.model('Message', Message);
