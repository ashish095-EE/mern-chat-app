
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';

dotenv.config(); //load environment variables from.env file

const app = express();
const port =  process.env.PORT || 5000;

app.get('/', (req, res) => {
    //root route localhost PORT env 
    res.send('Welcome to my API');
});

app.use("/api/auth", authRoutes);

app.listen(port, ()=> console.log(`port active on ${port}`));
  

