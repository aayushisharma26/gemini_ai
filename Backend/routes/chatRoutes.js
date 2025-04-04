// import express from "express";
// import { sendMessage, getChatHistory } from "../controller/chatController.js";
// import authMiddleware from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.post("/:userId/send", authMiddleware, sendMessage);


// router.get("/:userId/history", authMiddleware, getChatHistory);

// export default router;


import express from "express";
import { sendMessage, getChatHistory } from "../controller/chatController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/:userId/send", authMiddleware, sendMessage);
router.get("/:userId/history", authMiddleware, getChatHistory);
export default router;