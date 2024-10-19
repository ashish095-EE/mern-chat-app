import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
const Login = () => {


    const [userName,SetUsername] = useState("");
    const [password,SetPassword] = useState("");

    const{loading,login} =  useLogin();


    const handelSubmit = async (e) => {
        e.preventDefault();
        await login ({userName, password}); //create the hook
        
    }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="h-full w-full p-6 bg-slate-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
            <h1 className="text-3xl font-bold text-center text-gray-300">Login To
                <span className="text-3xl text-blue-700 font-bold"> Yappie!</span>
            </h1>


            <form action="" onSubmit={handelSubmit}>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-blue- font-bold">Username</span>
                        
                    </label>
                    <input type="text" placeholder="Enter Your Username" className="w-full input input-bordered input-accent h-10 opacity-25" onChange={ (e) => SetUsername(e.target.value)}/>
                </div>

                <div>
                    <label className="label p-2 back">
                        <span className="text-base label-text font-bold">Password</span>
                        
                    </label>
                    <input type="password" placeholder="Enter Your Passsword" className="w-full input input-bordered h-10 input-accent  opacity-25" onChange={(e) => SetPassword(e.target.value)} />
                </div>
                 <div>
                 
                    <button className="w-full h-10 text-white font-bold text-center bg-blue-700 rounded-md mt-5 
                    hover:opacity-25 hover:text-white-700 hover:font-bold transition duration-300" disabled={loading}>

                        {loading ? <span className="loading loading-spinner"></span> : "Login"}
                    </button>

                 </div>
                 <div className="mt-2">
                    <p >Not a Yapper yet? <Link to={'/signup'} className="font-semibold cursor-pointer hover:font-bold hover:text-white">SignUp..</Link></p>
                 </div>

                
            </form>

        </div>
      
    </div>
  )
}

export default Login
