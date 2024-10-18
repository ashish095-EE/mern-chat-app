import { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {
    const [input, setInput] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const { loading, signup } = useSignup();
    const handelGenderCheckbox = (gender) => {
        setInput({ ...input, gender });
    };

    const handelSubmit = async (e) => {
        e.preventDefault();
        await signup(input);
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="h-full w-full p-6 bg-slate-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                <h1 className="text-3xl font-bold text-center text-gray-300">
                    Sign Up With
                    <span className="text-3xl text-blue-700 font-bold"> Yappie!</span>
                </h1>

                <form onSubmit={handelSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-blue- font-bold">Fullname</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Your Fullname"
                            className="w-full input input-bordered input-accent h-10 opacity-25"
                            value={input.fullName}
                            onChange={(e) => setInput({ ...input, fullName: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-blue- font-bold">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Your Username"
                            className="w-full input input-bordered input-accent h-10 opacity-25"
                            value={input.userName}
                            onChange={(e) => setInput({ ...input, userName: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="label p-2 back">
                            <span className="text-base label-text font-bold">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            className="w-full input input-bordered h-10 input-accent opacity-25"
                            value={input.password}
                            onChange={(e) => setInput({ ...input, password: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="label p-2 back">
                            <span className="text-base label-text font-bold">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm Your Password"
                            className="w-full input input-bordered h-10 input-accent opacity-25"
                            value={input.confirmPassword}
                            onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
                        />
                    </div>

                    {/* GENDER CHECK BOX */}
                    <GenderCheckBox onCheckboxChange={handelGenderCheckbox} selectedGender={input.gender} />

                    <div>
                        <button
                            className={`w-full h-10 text-white font-bold text-center bg-blue-700 rounded-md mt-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            type="submit"
                            onClick={handelSubmit}
                            disabled={loading}
                        >
                            {loading ? 'Signing up...' : 'Signup'}
                        </button>
                    </div>

                    <div className="mt-2">
                        <p>Already a Yapper? <Link to={'/login'} className="font-semibold cursor-pointer hover:font-bold hover:text-white">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
