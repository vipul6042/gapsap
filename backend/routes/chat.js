import express from "express"
import { verifyToken } from "../middleware/authmiddleware.js"
import { accessChat,fetchChats,createGroupChat,renameGroupChat,removeFromGroup,addToGroup} from "../controllers/chat.js"

const router=express.Router()

router.post("/",verifyToken,accessChat)
router.get("/",verifyToken,fetchChats)
router.post("/group",verifyToken,createGroupChat)
router.post("/rename",verifyToken,renameGroupChat)
router.post("/removefromgroup",verifyToken,removeFromGroup)
router.post("/addtogroup",verifyToken,addToGroup)


export default router