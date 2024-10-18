import { useState } from "react";
import GenderCheckBox from "./GenderCheckBox"
import { Link } from "react-router-dom";

const SignUp = () => {
    const [input,setInput] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
        email: ''
    })
    const handelGenderCheckbox =(gender) =>{
        setInput({...input, gender})

    }

    const handelSubmit =  (e) => {
        e.preventDefault();
        console.log(input);
        
        //add backend validation
        //add backend API call
    }
  return (
    <div  className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="h-full w-full p-6 bg-slate-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
            <h1 className="text-3xl font-bold text-center text-gray-300">Sign Up With
                <span className="text-3xl text-blue-700 font-bold"> Yappie!</span>
            </h1>


            <form action="" onSubmit={handelSubmit}>
            <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-blue- font-bold">Fullname</span>
                        
                    </label>
                    <input type="text" placeholder="Enter Your Fullname" className="w-full input input-bordered input-accent h-10 opacity-25" value={input.fullname} onChange={(e) => setInput({...input,fullname: e.target.value})}/>
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-blue- font-bold">Username</span>
                        
                    </label>
                    <input type="text" placeholder="Enter Your Username" className="w-full input input-bordered input-accent h-10 opacity-25" value={input.username} onChange={(e)=> setInput({...input,username:e.target.value})} />
                </div>

                <div>
                    <label className="label p-2 back">
                        <span className="text-base label-text font-bold">Password</span>
                        
                    </label>
                    <input type="password" placeholder="Enter Your Passsword" className="w-full input input-bordered h-10 input-accent  opacity-25" value={input.password} onChange={(e)=> setInput({...input,password:e.target.value})} />
                </div>

                <div>
                    <label className="label p-2 back">
                        <span className="text-base label-text font-bold">Confirm Password</span>
                        
                    </label>
                    <input type="password" placeholder="Confirm Your Password" className="w-full input input-bordered h-10 input-accent  opacity-25" value={input.confirmPassword} onChange={(e)=> setInput({...input,confirmPassword:e.target.value})} />
                </div>

                {/*GENDER CHECK BOX*/}
                <GenderCheckBox onCheckboxChange = {handelGenderCheckbox} selectedGender = {input.gender}/>
               
                 
                 <div>
                 
                    <button className="w-full h-10 text-white font-bold text-center bg-blue-700 rounded-md mt-2 
                    hover:opacity-25 hover:text-white-700 hover:font-bold transition duration-300">

                        Signup
                    </button>

                 </div>
                 <div className="mt-2">
                    <p >Already a Yapper? <Link to={'/login'} className="font-semibold cursor-pointer hover:font-bold hover:text-white">Login</Link></p>
                 </div>

                
            </form>

        </div>
      
      
    </div>
  )
}

export default SignUp
