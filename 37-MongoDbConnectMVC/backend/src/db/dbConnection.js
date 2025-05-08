import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected mongoose");
    
}).catch(()=>{
    console.log("not connected mongose");
    
})