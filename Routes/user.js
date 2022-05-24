const express = require("express");
const { signup, signin } = require("../controllers/user");
const { IsAuth } = require("../Middleware/auth");
const { registervalidator, validation, loginvalidator } = require("../Middleware/validator");
const router = express.Router();

router.post("/signup",registervalidator(),validation,signup);
router.post("/signin",loginvalidator(),validation,signin);
router.get("/current",IsAuth,(req,res)=>{
    res.send(req.user)
})

module.exports=router