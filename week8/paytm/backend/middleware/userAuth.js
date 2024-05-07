const {JWT_SECRET}=require("../config")
const jwt =require("jsonwebtoken")

const authMiddleware=async(req,res,next)=>{
    const authHeader=req.headers.authorization;

    if(!authHeader || !authHeader.startWith('Bearer')){
        return res.status((403).json({
            message:"You are not authenticated"
        }))
    } 

    const token=authHeader.split(" ")[1];

    try{
        const decoded=jwt.verify(token,JWT_SECRET);
        console.log("decoded",decoded)
        req.userId=decoded.userId;
        next();
    }
    catch(err){
        return res.status(403).json({});
    }
}

module.exports={
    authMiddleware
}