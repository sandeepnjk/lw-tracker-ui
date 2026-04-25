import React from 'react';
import PropTypes from 'prop-types';

const Login = props => {
  const handleLogin = () => {

  }
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <p className="mb-6">Login to your account</p>
      {/* Email Field */}
      <div className="flex flex-col w-1/3 text-left mb-4">
        <label className="text-sm mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="text"
          placeholder='give your email'
          className="border px-4 py-2 rounded"
        />
      </div>
      {/* Password Field */}
      <div className="flex flex-col w-1/3 text-left">
        <label className="text-sm mb-1" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder='give your password'
          className="border px-4 py-2 rounded"
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={}>Login</button>
    </div>
  );
};


Login.propTypes = {

};



export default Login;