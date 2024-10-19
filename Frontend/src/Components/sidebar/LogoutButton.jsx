import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {

  const {loading,logout} = useLogout()
  return (
    <div className="mt-auto">
      {!loading ? (
        <RiLogoutBoxLine className=" text-slate-300 hover:text-black font-bold text-xl cursor-pointer"onClick={logout} />

      ): (
        <span className="loading loading-spinner"></span>
      )}
       
      
    </div>
  )
}

export default LogoutButton
