module.exports = function (app) {
  app.io.on('connection', function (socket) {
    console.log('connection!');
    socket.on('create_room', function (roomInfo) {
      // todo - create and serialize the room, along with an event for the room (mongo/ose)
      // todo - what does the room object look like?
      // todo - add the initial creator/author as the first user
    });

    socket.on('add_user_to_room', function (userAndRoomInfo) {
      // todo - find the user indicated and, if exists, create the room with the room_id as 'user room name' + timestamp
      // todo - broadcast the event to the room participants
    });

    socket.on('remove_user_from_room', function (userAndRoomInfo) {
      // todo - find the user indicated and, if exists, remove the user from the room
    });

    socket.on('close_room', function (roomCloseInfo) {
      // todo - load the room info from the serialized source and, if the current user is the one indicated who created it, set the room status to closed
    });

    socket.on('send_message_to_room', function (roomMessageInfo) {
      // todo - check that the user is allowed to broadcast to the room and, if so, fire away!
    });
  });
};
