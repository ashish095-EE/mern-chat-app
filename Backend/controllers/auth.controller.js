 import User from "../models/userModels.js";
 import bcrypt from "bcryptjs";
 
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
         confirmPassword:hashedPasswords,
         
         gender,
         profilePic: gender==="male"? boyProfilePic : girlProfilePic
      });

      await newUser.save();
      res.status(201).json({
         _id: newUser._id,
         userName: newUser.userName,
         
         fullName: newUser.fullName,
         profilePic: newUser.profilePic,
         
      })
      
   } catch (error) {
      console.error(error);
      res.status(500).json({error: "Server Error"});
      
   }
    
 }

 export const login = (req,res)=>{
    res.send('loginUser');
 }

 export const logout = (req,res)=>{
    res.send('logoutUser');
 }