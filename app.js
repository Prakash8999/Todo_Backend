import express from "express";
import mongoose, { Schema, model } from "mongoose";
import userRouter from "./routes/userRoute.js";
import taskRouter from "./routes/taskRoute.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from 'cors'

export  const app = express()

config({

	path:"./db/config.env"
})


// sare middlewares apan app.js ke under use karenge and db server.js ke under use karenge


// Using Middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
origin:[process.env.FRONTEND_URL],
methods:["GET","POST","PUT","DELETE"],
credentials:true
}))

// yaha pe apan ne prefix add kia i.e /users  
// using routes
app.use("/api/v1/users", userRouter)
app.use("/api/v1/task", taskRouter )






app.get("/", (req, res) => {
	res.send("Worked")
})



// using error middleware
app.use(errorMiddleware)