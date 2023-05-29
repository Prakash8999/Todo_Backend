import express from "express";
import {User}  from "../models/userModel.js";
import { login, logout, myProfile, register } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();



router.post("/signup",register )
router.post("/login",login )
router.get("/logout",logout )

router.get("/me", isAuthenticated, myProfile)









export default router
