import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations"

import toast from "react-hot-toast";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();
  
  const handelSubmit = (e) => {
    e.preventDefault();
    if(!search) return;

    if(search.length <3){
      return toast.error("Serach term must be at least 3 characters long");

    }
    const conversation  = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
      
    } else {
      toast.error("No conversation found with that name");
    }
    
  }
  return (
    <form onSubmit={handelSubmit} action="" className="flex items-center gap-2 p-2">
        <input type="text" placeholder="Search.." className="input input-bordered rounded-full bg-white" value={search}
        onChange={(e) =>setSearch(e.target.value)} />
        <button className="btn btn-circle bg-sky-500 text-white">
            
            <FaSearch />
        </button>

    </form>
  )
}

export default SearchInput
