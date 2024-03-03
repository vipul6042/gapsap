import express from "express"
import { allUser, login, registration } from "../controllers/auth.js"

const router=express.Router()

router.post("/register",registration)
router.post("/login",login)
router.post("/users",allUser)

export default router