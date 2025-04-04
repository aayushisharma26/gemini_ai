// import mongoose from "mongoose";

// const chatSchema = new mongoose.Schema({
//   user: { 
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: "User",
//     required: true 
//   },

//   messages: [{ sender: String, text: String, timestamp: Date }]

// });

// const Chat = mongoose.model("Chat", chatSchema);
// export { Chat };


import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  messages: [{ sender: String, text: String, timestamp: { type: Date, default: Date.now } }]
});

const Chat = mongoose.model("Chat", chatSchema);
export { Chat };
