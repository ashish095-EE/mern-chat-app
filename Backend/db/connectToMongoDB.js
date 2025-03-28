import mongoose from "mongoose";

import dotenv from 'dotenv';

// Load environment variables
dotenv.config();




const connectToMongoDB = async () =>{
    try {
        // Connect to MongoDB using the provided URI
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("MongoDB Connected");
        
    } catch (error) {
        console.error("Error connecting to MongoDB", error.message);
        
        
    }
    
   
};
export default connectToMongoDB;