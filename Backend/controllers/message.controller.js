import Message from '../models/message.model.js';

export const sendMessage = async (req,res,next) =>{
    try {
        res.send("Message Sent");
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
        
    }
}