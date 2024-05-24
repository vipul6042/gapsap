import express from "express";
import { verifyToken } from "../middleware/authmiddleware.js";
import { sendMessage, allMessage } from "../controllers/message.js";

const router = express.Router();

router.post("/sendMsg", verifyToken, sendMessage);
router.get("/allMsg/:chatId", verifyToken, allMessage);

export default router;
