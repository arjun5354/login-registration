import User from "../models/user.js";
import  jwt  from "jsonwebtoken";

export const protect= async (req,res,next) => {
    let token;
    if(req.headers.authorization){
        try{
            token=req.headers.authorization;
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            req.user=await User.findById(decoded.id).select("-password")
            return next();
        }catch(err){
            console.error("Token verification failed: ",err.message)
            return res.status(401).json({message:"Not Authorized, token failed"})
        }
    }
    return res.status(401).json({message:"Not Authorized, token failed"})
}