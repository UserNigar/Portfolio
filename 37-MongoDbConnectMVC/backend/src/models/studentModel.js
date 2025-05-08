import mongoose  from "mongoose";

const studentSchema=mongoose.Schema({
    name:{type:String , required:true},
    surname:{type:String , required:true},
    age:{type:Number , required:true}
},{
    collection:"Students",
    timestamps:true
}
)

const students=mongoose.model("Students", studentSchema)
export default students;