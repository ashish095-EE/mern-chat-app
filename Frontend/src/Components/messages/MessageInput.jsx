import { IoIosSend } from "react-icons/io";

const MessageInput = () => {
  return (
    <form className="px-2 my-3">
      <div className="w-full relative">
        <input 
          type="text" 
          placeholder="Type a message..." 
          className="w-full input input-bordered input-accent h-10 opacity-25" 
        />

        <button 
          type="submit" 
          className="absolute inset-y-0 end-0 flex items-center pe-3 transition-transform transform hover:scale-110 hover:text-white"
        >
          <IoIosSend className="text-current" />
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
