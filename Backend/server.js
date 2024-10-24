import path from "path";
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';
import {app,server} from "./socket/scket.js"


 




const PORT =  process.env.PORT||5000;
const __dirname = path.resolve();
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

app.use(express.static(path.join(__dirname,"/Frontend/dist")))

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname,"Frontend","dist","index.html"));

})
server.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`port active on ${PORT}`);
    

});
  

