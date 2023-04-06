const socketio = require('socket.io');
const Chats = require("../DB/Schema/Chats")
function setupSocketIO(server, port = 4000) {
  const io = socketio(server, {
    cors: {
      origin:"*",
    },
  });

  io.on('connection', (socket) => {
    console.log('A user has connected.');

    // Handle socket events here...
    socket.on('message', async({text,id}) => {
      const message = {
        text,
        name: id
      };
      io.emit('message', message);
      const doc = new Chats(message)
      await doc.save()
    });

    socket.on('disconnect', () => {
      console.log('A user has disconnected.');
    });
  });

  io.listen(port);
  console.log(`Socket.IO server listening on port ${port}`);
}

module.exports = setupSocketIO;
