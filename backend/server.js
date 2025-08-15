import express from "express"
import dotenv from "dotenv"
dotenv.config();
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.js"
const PORT=process.env.PORT 
const app=express()

app.use(express.json())

app.use("/api/users",authRoutes)
connectDB()
app.listen(PORT,()=>{
    console.log("server has started");
})
