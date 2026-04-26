import React, {use} from 'react';
import {login} from "../http.js";
import LwTrackerContext from "../store/LwTrackerContext.jsx";

const Login = props => {
 //setIsLoggedIn: setIsLoggedIn,
  //setLoggedInUser: setLoggedInUser
  /*
  {
  id: 8,
  name: "Sandeep Nanajkar",
  email: "sandeepnjk@gmail.com",
  role: 10,
  token: "thsisamocktoken",
  mask:1023,
}
  * */
  const {actions: {setIsLoggedIn: setIsLoggedIn, setLoggedInUser: setLoggedInUser}} =use( LwTrackerContext);
  const handleLogin = () => {
    const performLogin = async () => {
      const data = await login(true);
      console.log(`logged in user data ${data}`)
      setIsLoggedIn((prev) => data.id !== undefined && data.id !== null && data.id > 0);
      setLoggedInUser((prev) => data);
    }
    performLogin();
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
      <button type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={handleLogin}>Login</button>
    </div>
  );
};


Login.propTypes = {

};



export default Login;