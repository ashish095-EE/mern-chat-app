import Message from '../models/message.model.js';
import Conversation from '../models/conversation.model.js';

export const sendMessage = async (req, res, next) => {
    try {
        const { message } = req.body; // message from request body
        const { id: receiverId } = req.params; // receiver ID from request params
        const senderId = req.user._id; // sender ID from authenticated user

        // Find or create conversation between sender and receiver
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        // If no conversation exists, create a new one
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        // Create a new message
        const newMessage = new Message({
            sender: senderId,
            receiver: receiverId,
            message, // the actual message content
        });

        
        

        // Add the message to the conversation
        if(newMessage){
            conversation.messages.push(newMessage._id);

        }

        //socket io functionality
        
        await Promise.all([conversation.save(),newMessage.save()]);//runs parallely no delay in between
        

        res.status(201).json(newMessage); // Return the newly created message
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: "Internal Server Error" });
    }
};
