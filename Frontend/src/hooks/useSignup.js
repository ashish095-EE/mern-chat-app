import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext()

    const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
        const success = handelInputError({ fullName, userName, password, confirmPassword, gender });

        if (!success) return; // Early return if validation fails

        setLoading(true);

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, userName, password, confirmPassword, gender })
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Signup failed");
                
            }

            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }

            //localStorage setup
            localStorage.setItem("chat-user",JSON.stringify(data));

            //context update

            setAuthUser(data);
           
            
        } catch (error) {
            toast.error(error.message); // Error message
        } finally {
            setLoading(false); // Ensure loading state resets
        }
    };

    return { loading, signup };
};

export default useSignup;

function handelInputError({ fullName, userName, password, confirmPassword, gender }) {
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
        toast.error("All fields are required");
        return false;
    }
    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }
    if (password.length < 6) {
        toast.error("Password should be at least 6 characters long");
        return false;
    }
    return true; // Return true if all checks pass
}
