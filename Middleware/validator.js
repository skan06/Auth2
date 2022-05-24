const { validationResult, check } = require("express-validator");

exports.registervalidator=()=>[
    check("name","name is required").not().isEmpty(),
    check("email","email is valid").isEmail(),
    check("password","password is valid").isLength({min:6})
];

exports.loginvalidator=()=>[
    check("email","email is valid").isEmail(),
    check("password","password is valid").isLength({min:6})
];

exports.validation=(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty){
        return res.status(400).json({errors:errors.array()})
    }
}