
import MessageCointainer from "../../Components/messages/MessageCointainer"
import Sidebar from "../../Components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-slate-400 bg-clip-paddind backdrop-filter backdrop-blur-lg bg-opacity-30 border-gray-100">
      <Sidebar />
      <MessageCointainer />
      
      
    </div>
  )
}

export default Home
