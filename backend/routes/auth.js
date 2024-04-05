import express from "express"
import { allUser, login, registration } from "../controllers/auth.js"
import { verifyToken } from "../middleware/authmiddleware.js"
const router=express.Router()

router.post("/register",registration)
router.post("/login",login)
router.post("/users",verifyToken,allUser)

export default router