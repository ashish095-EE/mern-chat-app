import { useAuthContext } from '../../Context/AuthContext';
import useConversation from '../../zustand/useConversation';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  
  const fromMe = message.sender === authUser._id;

  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic || 'defaultPicUrl';
  const bubbleBgColor = fromMe ? 'bg-blue-500' : "";
  

  

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="User avatar"
            src={profilePic}
          />
        </div>
      </div>
      <div className="chat-header text-white">
        {fromMe ? 'You' : `${selectedConversation.fullName}`} {/* Adjust name based on sender */}
        <time className="text-xs opacity-50">12:45</time>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>
        {message.message} {/* Ensure message.message is a string */}
      </div>
      <div className="chat-footer opacity-50">Delivered</div>
    </div>
  );
}

export default Message;
