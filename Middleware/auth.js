const jwt=require("jsonwebtoken");
const User=require("../model/User");

exports.IsAuth=async(req,res,next)=>{
    try {
        const token=req.header("Authorization")
        if(!token){
            res.status(401).send({error:[{msg:"Not authorized"}]})
        }
        const decoded=jwt.verify(token,process.env.SECRET_KEY)
        const foundUser=await User.findOne({_id:decoded.id})
        if(!foundUser){
            res.status(401).send({error:[{msg:"Not authorized"}]})
        }
        req.user=foundUser
        next()
    } catch (error) {
        res.status(400).send({error:[{msg:"Error"}]})
    }
}