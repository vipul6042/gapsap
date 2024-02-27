import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./loginpage.css";

const Loginpage = () => {
  return (
    <div className="sectio">
      <div className="background">
        <div className="shape"></div>
        <form>
          <h3>Login Here</h3>

          <label htmlFor="username">Email</label>
          <input type="text" placeholder="Email or Phone" id="username" />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />

          <button>Log In</button>
          <div className="social">
            <div className="go">
              <FontAwesomeIcon icon={faGoogle} /> Google
            </div>
            <div className="fb">
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </div>
          </div>
        </form>
        <div className="shape"></div>
      </div>
    </div>
  );
};

export default Loginpage;
