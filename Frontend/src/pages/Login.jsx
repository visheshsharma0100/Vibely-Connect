import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {

  let navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#eeeeff]">

      {/* LEFT SIDE */}
      <img
        src="/h1.png"
        alt="Vibely"
        className="leftchild m-8 h-[calc(100vh-4rem)] w-[calc(40%-4rem)] rounded-2xl object-cover"
      />

      {/* RIGHT SIDE */}
      <div className="rightchild w-[60%] h-screen flex items-center justify-center">

        <div className="w-full max-w-xl">

          {/* Heading */}
          <h1 className="text-4xl font-bold text-[#111333]">
            Welcome back
          </h1>

          <p className="mt-3 text-lg text-gray-500">
            Log in to continue your conversations
            <br />
            on Vibely.
          </p>

          {/* Form */}
          <form className="mt-8 space-y-4">

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-[#dddaf5] bg-white px-5 py-4
                                text-gray-700 outline-none transition
                                focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            {/* Password */}
            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full rounded-xl border border-[#dddaf5] bg-white px-5 py-4 pr-12
                                text-gray-700 outline-none transition
                                focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2
                                text-gray-400 cursor-pointer hover:text-purple-500"
              >
                {showPassword
                  ? <Eye size={20} />
                  : <EyeOff size={20} />
                }
              </button>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-gradient-to-r
                            from-[#6945ed] to-[#7650f5] py-4
                            text-lg font-semibold text-white shadow-lg
                            shadow-purple-200 transition
                            hover:scale-[1.01] hover:shadow-xl"
            >
              Log In
            </button>

          </form>

          {/* Sign Up */}
          <p className="mt-8 text-center text-gray-400">

            Don't have an account?{" "}

            <span
              onClick={() => navigate("/signup")}
              className="cursor-pointer font-semibold text-[#6743ed]"
            >
              Sign up
            </span>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;