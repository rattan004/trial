import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    course:{type:String, required:true},
    section:{type:String, required:true},
    semester:{type:Number, required:true},
    roll:{type:String, required:true,unique:true},
    password:{type:String, required:true},
    cartData:{type:Object, default: {}}
},{minimize:false})

const userModel= mongoose.models.user || mongoose.model('user',userSchema);

export default userModel;
