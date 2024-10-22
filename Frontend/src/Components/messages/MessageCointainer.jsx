import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../Context/AuthContext";


const MessageContainer = () => {
 const{selectedConversation,setSelectedConversation} = useConversation();
 
 

 

 useEffect(() => {
  // cleanup function(unmounts)
  return() =>setSelectedConversation(null);

 }, [setSelectedConversation]);
  

  return (
    
    
    
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected  />
      ) : (
        <>
          <div className="bg-blue-400 px-4 py-2 mb-2 flex items-center">
            <div className="avatar online mr-3">
              <div className="w-12 rounded-full">
                <img src={selectedConversation.profilePic} alt="user avatar" />
              </div>
            </div>
            <div>
              <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
            </div>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const {authUser}=  useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>{`Hello 👋${authUser.fullName}🗣`}</p>
        <p>Select a Yapper to start Yapping</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
