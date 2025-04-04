// import axios from "axios";
// import { Chat } from "../model/chatModel.js";
// import { User } from "../model/userModel.js"; 

// const sendMessage = async (req, res) => {
//   const { userId } = req.params;
//   const { text } = req.body;

//   try {
//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     let chat = await Chat.findOne({ user: userId });
//     if (!chat) {
//       chat = new Chat({ user: userId, userName: user.name, messages: [] });
//     }

//     const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

//     const response = await axios.post(API_URL, {
//       contents: [{ role: "user", parts: [{ text }] }]
//     });

//     console.log("🔹 API Response:", response.data); 

//     const botResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't understand that.";

//     const userMessage = { sender: user.name, text, timestamp: new Date() };
//     const botMessage = { sender: "Gemini", text: botResponse, timestamp: new Date() };

//     chat.messages.push(userMessage, botMessage);
//     await chat.save();

//     res.status(200).json({ messages: chat.messages });

//   } catch (error) {
//     console.error("API Request Error:", error.response?.data || error.message);
//     res.status(500).json({ message: "Error processing request", error: error.response?.data || error.message });
//   }
// };


// const getChatHistory = async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const chat = await Chat.findOne({ user: userId });
//     if (!chat) return res.status(404).json({ message: "No chat history found" });

//     res.status(200).json({ messages: chat.messages });

//   } catch (error) {
//     res.status(500).json({ message: "Error fetching chat history", error });
//   }
// };

// export { sendMessage, getChatHistory };


import axios from "axios";
import { Chat } from "../model/chatModel.js";
import { User } from "../model/userModel.js";

const sendMessage = async (req, res) => {
  const { userId } = req.params;
  const { text } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "❌ User not found" });
    
    let chat = await Chat.findOne({ user: userId });
    if (!chat) {
      chat = new Chat({ user: userId, messages: [] });
    }

    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
    const response = await axios.post(API_URL, {
      contents: [{ role: "user", parts: [{ text }] }]
    });

    console.log("🔹 API Response:", response.data);

    const botResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't understand that.";
    chat.messages.push(
      { sender: user.name, text, timestamp: new Date() },
      { sender: "Gemini", text: botResponse, timestamp: new Date() }
    );
    await chat.save();
    res.status(200).json({ messages: chat.messages });
  } catch (error) {
    console.error("❌ API Request Error:", error.response?.data || error.message);
    res.status(500).json({ message: "Error processing request", error: error.response?.data || error.message });
  }
};

const getChatHistory = async (req, res) => {
  const { userId } = req.params;
  try {
    const chat = await Chat.findOne({ user: userId });
    if (!chat) return res.status(404).json({ message: "❌ No chat history found" });
    res.status(200).json({ messages: chat.messages });
  } catch (error) {
    res.status(500).json({ message: "Error fetching chat history", error });
  }
};

export { sendMessage, getChatHistory };