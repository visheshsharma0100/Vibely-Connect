import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from "lucide-react";
import axios from 'axios';
import { serverURL } from "../main";

const SignUp = () => {

    let navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [loading, setLoading] = useState(false);
    let [err, setError] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            let result = await axios.post(`${serverURL}/api/auth/signup`, {
                username, email, password
            }, { withCredentials: true });
            console.log(result);
            setUsername("");
            setEmail("");
            setPassword("");
            setLoading(false);
            setError("");
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(error.response?.data?.message || "Something went wrong");
        }
    }

    return (
        <div className="flex min-h-screen bg-[#eeeeff]">
            {/* Left side */}
            <img
                src="/h1.png"
                alt="Vibely"
                className="leftchild m-8 h-[calc(100vh-4rem)] w-[calc(40%-4rem)] rounded-2xl object-cover"
            />

            {/* RIGHT SIDE */}
            <div className="rightchild w-[60%] h-screen flex items-center justify-center">

                <div className="w-full max-w-xl">
                    <h1 className="text-4xl font-bold text-[#111333]">
                        Create your account
                    </h1>

                    <p className="mt-3 text-lg text-gray-500">
                        Join Vibely and be part of a growing
                        <br />
                        community of amazing people.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSignup} className="mt-8 space-y-4">
                        <div className="relative">
                            <input onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                placeholder="Username"
                                className="w-full rounded-xl border border-[#dddaf5] bg-white px-5 py-4
                text-gray-700 outline-none transition
                focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                                value={username} />
                        </div>
                        <div>
                            <input onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Email address"
                                className="w-full rounded-xl border border-[#dddaf5] bg-white px-5 py-4
                text-gray-700 outline-none transition
                focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                                value={email} />
                        </div>

                        {/* password */}
                        <div className="relative">
                            <input onChange={(e) => setPassword(e.target.value)}
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full rounded-xl border border-[#dddaf5] bg-white px-5 py-4 pr-12
        text-gray-700 outline-none transition
        focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                                value={password} />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-purple-500"
                            >
                                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                            </button>
                        </div>

                        {/* show error  */}
                        {err && (
                            <p className="mt-2 rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-500">
                                {err}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="mt-2 w-full rounded-xl bg-gradient-to-r
              from-[#6945ed] to-[#7650f5] py-4
              text-lg font-semibold text-white shadow-lg
              shadow-purple-200 transition hover:scale-[1.01] hover:shadow-xl"
                        >
                            {loading ? "Loading..." : "Sign Up"}
                        </button>

                    </form>

                    {/* Login */}
                    <p className="mt-8 text-center text-gray-400">
                        Already have an account?{" "}
                        <span onClick={() => { navigate("/login") }} className="cursor-pointer font-semibold text-[#6743ed]">
                            Log in
                        </span>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default SignUp;