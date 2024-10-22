
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';
import {app,server} from "./socket/Socket.js";

 




const PORT =  process.env.PORT||5000;
dotenv.config(); //load environment variables from.env file

app.use(express.json());

app.use(cookieParser());

// app.get('/', (req, res) => {
//     //root route localhost PORT env 
//     res.send('welcome to my API');
// });

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
server.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`port active on ${PORT}`);
    

});
  

