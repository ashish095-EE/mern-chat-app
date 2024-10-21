import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message,setMessage] = useState("");
  const{loading,sendMessage} = useSendMessage();

  const handelSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");

  }

  return (
    <form className="px-2 my-3" onSubmit={handelSubmit}>
      <div className="w-full relative">
        <input 
          type="text" 
          placeholder="Type a message..." 
          className="w-full input input-bordered input-accent h-10 opacity-25" value={message} onChange={(e)=> setMessage(e.target.value)}
        />

        <button 
          type="submit" 
          className="absolute inset-y-0 end-0 flex items-center pe-3 transition-transform transform hover:scale-110 hover:text-white"
        >
        {loading ? <div className="loading loading-spinner"></div>:<IoIosSend className="text-current" />}
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
