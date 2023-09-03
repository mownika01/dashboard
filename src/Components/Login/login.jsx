import React from "react";
import "./login.css";
import { IoLogoGithub } from "react-icons/io";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillApple,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BiLogoDiscord } from "react-icons/bi";
import jwt_decode from "jwt-decode";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function Login() {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/dashboard")
  }
  return (
    <div className="login_container">
      <div className="left_login">
        <h2 className="logo">Logo</h2>
        <div className="title">
          <h1 className="l_title">Board.</h1>
          <div className="icons">
            <IoLogoGithub color="white" />
            <AiFillTwitterCircle color="white" />
            <AiFillLinkedin color="white" />
            <BiLogoDiscord color="white" />
          </div>
        </div>
      </div>
      <div className="right_login">
        <div className="login">
          <h1 className="r_title">Sign In</h1>
          <p className="txt">Sign in to your account</p>
          <div className="buttons">
            <GoogleOAuthProvider clientId="976598365198-61b85e4d40fadtlke605j4a5q4mkllic.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(CredentialResponse) => {
                  const details = jwt_decode(CredentialResponse.credential);
                  console.log(details);
                }}
                onError={() => {
                  console.log("LOGIN FAILED");
                }}
              ></GoogleLogin>
            </GoogleOAuthProvider>
           {/* <div className="ios_opt">
              <FcGoogle />
              <p className="title_opt">Sign in with Google</p>
              </div> */}
            <div className="ios_opt">
              <AiFillApple color="#858585" />
              <p className="title_opt">Sign in with Apple</p>
            </div>
          </div>
          <div className="form_container">
            <form onSubmit={handleClick}>
              <div className="form">
                <label className="lbl_name">Email Address</label>
                <input type="email" required />
                <label className="lbl_name">Password</label>
                <input type="password" required />
              </div>
              <div className="link">
                <a href="" className="links">
                  Forgot Password?
                </a>
                <button className="login_btn" type="submit">
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <div className="register">
            <span>Don’t have an account?</span>
            <a href="" className="links">
              Register here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
