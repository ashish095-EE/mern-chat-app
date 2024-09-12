
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

dotenv.config(); //load environment variables from.env file

const app = express();
const port =  process.env.PORT

app.get('/', (req, res) => {
    //root route localhost PORT env 
    res.send('welcome to my API');
});

app.use("/api/auth", authRoutes);

app.listen(port, ()=>{
    connectToMongoDB();
    console.log(`port active on ${port}`);
    

});
  

