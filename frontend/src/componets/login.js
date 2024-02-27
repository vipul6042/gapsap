import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "../pages/loginpage.css";

const Login = () => {
  return (
    <div><label htmlFor="username">Email</label>
    <input type="text" placeholder="Email or Phone" id="username" />

    <label htmlFor="password">Password</label>
    <input type="password" placeholder="Password" id="password" />

    <button className="login">Log In</button>
    <div className="social">
      <div className="go">
        <FontAwesomeIcon icon={faGoogle} /> Google
      </div>
      <div className="fb">
        <FontAwesomeIcon icon={faFacebook} /> Facebook
      </div>
    </div></div>
  )
}

export default Login