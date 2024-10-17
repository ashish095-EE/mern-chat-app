const Message = () => {
    return (
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="User avatar"
              src="/bge.png"
            />
          </div>
        </div>
        <div className="chat-header text-blue-300">
          Ashish Yapper
          <time className="text-xs opacity-50"> 12:45</time>
        </div>
        <div className="chat-bubble bg-violet-500">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    );
  }
  
  export default Message;
  