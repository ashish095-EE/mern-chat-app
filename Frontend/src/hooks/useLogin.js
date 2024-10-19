import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

const useLogin = () => {
    const[loading,setLoading] = useState(false);
    const{setAuthUser} = useAuthContext();

    const login = async ({ userName, password }) => {
        const success = handelInputError({userName, password});
        if (!success) return; // Early return if validation fails
        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, password }),
            });
            const data = await res.json();

            if(data.error){
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
            toast.success("Login successful!");


            
        } catch (error) {
            toast.error(error)
            
        } finally {
            setLoading(false);
        }

    }

  return {loading,login};
   
  
}

export default useLogin




function handelInputError({userName, password }) {
    if (!userName || !password) {
        toast.error("All fields are required");
        return false;
    }
    
    

    return true; // Return true if all checks pass
}

