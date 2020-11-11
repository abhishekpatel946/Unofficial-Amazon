import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../Firebase/firebase";
import { useStateValue } from "../ContextProvider/StateProvider";

function Login() {
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();

    // firebase auth-login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully signIn into app
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (event) => {
    event.preventDefault();

    // firebase auth-register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully created new user-registered
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

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
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="abhi@mail.com"
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
          />
          <button className="login_singin" onClick={signIn}>
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to UnOfficial Amazon's Condition of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Intrest-Based Ads Notice.
        </p>
        <button className="login_signup" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
