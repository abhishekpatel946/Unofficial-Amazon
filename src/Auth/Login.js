import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type="text" placeholder="abhi@mail.com" />
          <h5>Password</h5>
          <input type="password" placeholder="******" />
          <button className="login_singin">Sign in</button>
        </form>
        <p>
          By signing-in you agree to UnOfficial Amazon's Condition of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Intrest-Based Ads Notice.
        </p>
        <button className="login_signup">Create your Amazon account</button>
      </div>
    </div>
  );
}

export default Login;
