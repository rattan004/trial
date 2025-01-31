import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

//Route for user login
const loginUser = async (req,res) => {
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"User Does Not Exist"})
        }
        
        const isMatch = await bcrypt.compare(password,user.password);
        if(isMatch){
            const token = createToken(user._id);
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"Invalid Credentials"})
        }

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const updateUserDetails = async (req,res) => {
    const {userId,name,email,roll,course,section} = req.body
    const user = await userModel.findByIdAndUpdate(userId,{name,email,course,section,roll})
    res.json({success:true,message:"Updated"})
}

//Route for user sign up
const registerUser = async (req,res) => {
    try {
        const {name,email,course,semester,section,roll,password} = req.body;

        //Checking user already exists or not
        const exists = await userModel.findOne({email});
        if (exists){
            return res.json({success:false, message:"User Already Exists"})
        }
        const exists1 = await userModel.findOne({roll});
        if (exists){
            return res.json({success:false, message:"Roll Number Already Used"})
        }
        //Validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({success:false, message:"Please Enter a Valid Email"})
        }
        if (password.length < 8){
            return res.json({success:false, message:"Please Enter a Strong Password"})
        }
        //Hashing user pass
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name,
            email,
            course,
            semester,
            section,
            roll,
            password:hashedPassword
        })

        const user = await newUser.save();

        const token = createToken(user._id);

        res.json({success:true , token})

        
    } catch (error) {
        console.log(error);
        res.json({success:false , message:error.message})
    }
}

const userDetails = async(req,res) => {
    try {
        const {userId} = req.body
        const user = await userModel.findById(userId)
        res.json({success:true,user})
    } catch (error) {
        
    }
}

//Route for Admin Login
const adminLogin = async (req,res) => {
    try {
        const {email,password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true,token})
        }
        else{
            res.json({success:false, message:"Invalid Credentials"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false , message:error.message})
    }
}

export {loginUser,registerUser,adminLogin,userDetails,updateUserDetails};
