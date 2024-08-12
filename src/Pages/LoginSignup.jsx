import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsingup">
      <div className="loginsingup-conainer">
        <h1>Login Here</h1>
        <div className="loginingup-fields">
          <input type="text" placeholder="Enter you name" />
          <input type="Email" placeholder="Enter you email" />
          <input type="password" placeholder="Enter you password" />
        </div>
        <button>Continue</button>
        <p className="Loginsinguo-login">
          {" "}
          Already have an account? <span>Sign up</span>
        </p>
        <div className="loginsinup-agree">
          <input type="checkbox" name="" ide="" />
          <p>I agree with the terms and condition</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
