 import User from "../models/userModels.js";
 import bcrypt from "bcryptjs";

 import generateTokenAndSetCookie from "../utils/generateToken.js"
 
 export const signup = async (req,res)=>{

   try {

      const{fullName,userName,password,confirmPassword,gender} = req.body;

      if(password!==confirmPassword){
         return res.status(400).json({error:"Password do not match"});
      }

      const user = await User.findOne({userName});

      if(user){
         return res.status(400).json({error:"user already exists"});
      }

      const salt = await bcrypt.genSalt(10);

      const hashedPasswords = await bcrypt.hash(password,salt);

      //HASH PASSSWORD

      const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
      const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

      const newUser = new User({
         fullName,
         userName,
         password:hashedPasswords,
         confirmPassword: hashedPasswords,
         gender,
         profilePic: gender==="male"? boyProfilePic : girlProfilePic
      });

     if(newUser){

      generateTokenAndSetCookie(newUser._id,res);


      //generate JWt Token
      await newUser.save();
      res.status(201).json({
         _id: newUser._id,
         userName: newUser.userName,
         
         fullName: newUser.fullName,
         profilePic: newUser.profilePic,
         
      });
     }
     else{
      res.status(400).json({error:"Failed to create user"});
     }
      
   } catch (error) {
      console.error(error);
      res.status(500).json({error: "Server Error"});
      
   }
    
 }

 export const login = async (req,res)=>{
    try {
      const {userName, password} = req.body;
      const user =  await User.findOne({userName})

      const isPasswordCorrect = await bcrypt.compare(password,user?.password|| "");
      if(!isPasswordCorrect || !user){
         return res.status(400).json({error: "Invalid credentials"});
      }

      generateTokenAndSetCookie(user._id,res);
      res.json({
         _id: user._id,
         userName: user.userName,
         fullName: user.fullName,
         profilePic: user.profilePic
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({error: "Login error"});
      
      
 
   }
 }

 export const logout = (req,res)=>{
    try {
      res.cookie("jwt","",{maxAge:0})
      res.json({message: "Logged out sucessfully"});
    } catch (error) {
      console.error(error);
      res.status(500).json({error: "Login error"});
      
      
 
   }
 }