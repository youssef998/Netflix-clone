import React from "react";
import "./LoginForm";
import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import google from "../../Assets/google.png";
import { authentication } from "../../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function LoginForm() {
  const history = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [IsLoading, setIsLoading] = useState(false);
  const SignInWithFirebase = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;
        authCtx.login(token);
        history("/browse");
        console.log(token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const login = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
    // VALIDATION SHOULD BE HERE

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBdP9CNkeJcasDCqHSXSz9YnGhQ22cqtvo";

    if (isLogin) {
      // SIGN IN
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBdP9CNkeJcasDCqHSXSz9YnGhQ22cqtvo";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBdP9CNkeJcasDCqHSXSz9YnGhQ22cqtvo";
      // SIGN UP PART
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log(data);
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage);
          });
        }
      })
      .then((data) => {
        // const expirationTime = new Date(
        //   new Date().getTime() + +data.expiresIn * 1000
        // );
        authCtx.login(data.idToken);
        history("/browse");
        console.log(authCtx.login(data.idToken));
        console.log(data);
      });
  };

  return (
    <div className="login-body">
      <div className="login-body__form">
        <h1>{isLogin ? "Sign In" : "Sign Up"}</h1>
        <div className="login-body__input mb-16">
          <input
            type="text"
            placeholder="Email or phone number"
            ref={emailInputRef}
          />
        </div>
        <div className="login-body__input">
          <input
            type="password"
            placeholder="Password"
            ref={passwordInputRef}
          />
        </div>
        {!IsLoading && (
          <button className="login-body__submit-btn" onClick={login}>
            {isLogin ? "Sign in" : "Sign up"}
          </button>
        )}
        {IsLoading && <p className="login-body__submit-btn">Loading....</p>}
        <div className="login-body__options">
          <span>Remember me</span>
          <span className="login-body__need-help">Need help?</span>
        </div>
        <div className="login-body__footer">
          <div className="login-body__fb">
            <img src={google} alt="google" />
            <span onClick={SignInWithFirebase}>Login with Google</span>
          </div>
          <div className="login-body__new-to-nl">
            <span>New to Netflix ?</span>
            <span
              className="login-body__sign-up"
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Have an account?"}
            </span>
          </div>
          <div className="login-body__google_captcha">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <span className="login-body__learn-more">Learn more.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
