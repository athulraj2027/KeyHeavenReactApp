import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <div className="shadow-2xl rounded-xl p-5">
        <h1 className="text-2xl text-gray-500 mb-5">Signin for Admin</h1>
        <div className="">
          <label htmlFor="email" className="text-sm text-gray-500 mb-2">
            Email Address
          </label>
          <br />
          <input
            type="text"
            className="bg-gray-500 text-white p-3 rounded-md"
            placeholder="Enter your email address"
          />
          <br />
          <label htmlFor="email" className="text-sm text-gray-500 mb-2">
            Password
          </label>
          <br />
          <input
            type="password"
            className="bg-gray-500 text-white p-3 rounded-md"
            placeholder="Enter password"
          />
        </div>

        <button className="bg-blue-500 text-white px-5 py-1 rounded-md w-full my-5">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
