import express from "express"
import User from "../models/user.js"
import { protect } from "../middleware/auth.js";
import  jwt  from "jsonwebtoken";

const router=express.Router()

// Route for register user
router.post("/register",async (req,res)=>{
  const {username,email,password}=req.body;
  try{
    if(!username || !email || !password){
        return res.status(400).json({messege:"Please fill all the fields"})
    }
    const userExist=await User.findOne({email})
    if(userExist){
        return res.status(400).json({messege:"User already exists"})
    }
    const user=await User.create({username,email,password})
    const token=generateToken(user._id)
    res.status(201).json({
        id:user._id,
        username:user.username,
        email:user.email,
        token:token
    })
  }catch(err){
        res.status(500).json({messege:"Server error"})
    }
})

// Route for login user

router.post("/login",async(req,res)=>{
    const {email,password}=req.body;
  try{
    if(!email || !password){
        return res.status(400).json({messege:"Please fill all the fields"})
    }
    const user=await User.findOne({email})
    if(!user || !(await user.matchPassword(password))){
        return res.status(401).json({messege:"Invalid Credentials"})
    }
    const token=generateToken(user._id)
    res.status(201).json({
        id:user._id,
        username:user.username,
        email:user.email,
        token:token
    })
  }catch(err){
        console.error(err)
        res.status(500).json({messege:"Server error"})
    }
})
// Me
router.get("/me", protect, async (req,res) => {
    res.status(200).json(req.user);    
})
// Generate JWT Tokens
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"30d"})
}
export default router;