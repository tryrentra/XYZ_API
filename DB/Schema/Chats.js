const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  name: String,
  text: {
    type: String,
    required: true,
  }
});

const Chats = mongoose.model('Chat', chatSchema);

module.exports = Chats;
