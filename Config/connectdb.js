const mongoose = require("mongoose");
const connectdb= async ()=>{
    try {
        await mongoose.connect(process.env.linkdb)
        console.log("Database connected")
    } catch (error) {
        console.log("Database failed to connect")
    }
}

module.exports=connectdb
