import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

const useLogout = () =>{
    const [loading,setLoading] =useState(false);
    const{setAuthUser} = useAuthContext();

    const logout = async () => {
        setLoading(true);

       try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                
            });
            const data = await res.json();

            if(data.error){
                throw new Error(data.error);

            }
            localStorage.removeItem("chat-user");
            setAuthUser(null);
            toast.success("Logged out successfully!");
            
            
        } catch (error){
            console.error(error); // Log the error for debugging
            toast.error(error.message);
            
            
        } finally {
            setLoading(false); // Ensure loading state resets
        }
    };
    return{loading,logout};

     
};
export default useLogout;