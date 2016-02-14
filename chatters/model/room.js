var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ts = require('mongoose-timestamp');

var Room = new Schema({
  roomId: String,
  creator: Schema.Types.ObjectId,
  users: [Schema.Types.Mixed]
});

Room.plugin(ts);

module.exports = mongoose.model('Room', Room);
