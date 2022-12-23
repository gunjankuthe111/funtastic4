const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    sender: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    content: {type: String, trim: true},
    chat: {type: mongoose.Schema.Types.ObjectId, ref: "Chat"},
    reader: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
  },
  {timestamps: true}
);

const MessageModel = mongoose.model("message", messageSchema);
module.exports = MessageModel;
