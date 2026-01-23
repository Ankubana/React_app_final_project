"use client";

import { FaUser, FaGoogle, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { auth } from "../firebase/page";
import { useRouter } from "next/navigation";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  signInAnonymously,
} from "firebase/auth";
import login_styles from "./Login.module.css";
import Layout from "../layout";
export default function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logMessage, setLoginMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [signup, setSignup] = useState(false);
   const[restPassword,setRestPassword]=useState(false)
  const [lebal, setLebal] = useState("Reset your password");
  /* 🔐 EMAIL LOGIN */
  const login = () => {
    if (!email||!password){
      setLoginMessage("Please enter email and password");
      return;
    } 
    signInWithEmailAndPassword(auth, email, password)
      .then(() => setLoginMessage(""))
      .catch((error) => setLoginMessage(error.message));
    };

  /* 📝 REGISTER */
  const register = () => {
    if (!email||!password) {
      setLoginMessage("Please enter email and password");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoginMessage("Account created successfully ✅");
        setIsLogin(true);
      })
      .catch((error) => setLoginMessage(error.message));
  };

  /* 🔁 PASSWORD RESET */
  const resetPassword = () => {
      setLebal("Reset your password")
        
    if (!email) {
      setLoginMessage("Please enter your email first");
      return;
    }
 
    sendPasswordResetEmail(auth, email)
      .then(() => setLoginMessage("Password reset email sent 📧"))
      .catch((error) => setLoginMessage(error.message));
  };

  /* 🟢 GOOGLE LOGIN */
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        setLoginMessage("");
        console.log("Google login success");
      })
 
      .catch((error) => setLoginMessage(error.message));
  };

  /* 👤 GUEST LOGIN (Anonymous) */
  const guestLogin = () => {
    const Router=useRouter()
    signInAnonymously(
      
      auth)
      .then(() => {
        setLoginMessage("");
        console.log("Guest login"); 
        
      })
      .catch((error) => setLoginMessage(error.message));
  };
   const Rawouter=useRouter()
  return (
    
    <div id="__next">
      <div className={`${login_styles.wrapper} ${login_styles.wrapper__full}`}>
        <div
          className={`${login_styles.sidebar__overlay} ${login_styles.sidebar__overlay__hidden}`}
          onClick={onClose}
        ></div>

        <div
          className={login_styles.auth__wrapper}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={login_styles.auth}>
            <button className={login_styles.close__btn} onClick={onClose}>
              <FaTimes size="30" />
            </button>
            <div className={login_styles.auth__content}>
              <div className={login_styles.auth__title}>
                {isLogin ? "Log in to Summarist" :lebal}
                
              </div>

              {logMessage && (
                <p className={login_styles.error}>{logMessage}</p>
              )}

              {/* 👤 Guest Login */}
              {isLogin&&(
                <>
              <button  
                className={`${login_styles.btn} ${login_styles.guest__btn__wrapper}`}
                onClick={ ()=>{Rawouter.push("/for_you"), guestLogin}}
              >
                <figure
                  className={`${login_styles.google__icon__mask} ${login_styles.guest__icon__mask}`}
                >
                  <FaUser />
                </figure>
                
                <div>Login as a Guest</div>
              </button>
              
              <div className={login_styles.auth__separator}>
                <span className={login_styles.auth__separator__text}>or</span>
              </div>
              </>
               )}
              {/* 🟢 Google Login */}
                {isLogin||signup?(
              <>
              
              <button
                className={`${login_styles.btn} ${login_styles.google__btn__wrapper}`}
                onClick={googleLogin}
              >
              <figure className={login_styles.google__icon__mask}>
                  <img src="googleLogo.jpg" className={login_styles.google__icon__mask} />
                </figure>


                <div>Login with Google</div>
              </button>
                
              <div className={login_styles.auth__separator}>
                <span className={login_styles.auth__separator__text}>or</span>
              </div>
              </> 
                ):(null)}
              {/* 📧 Email Form */}
              <form
                className={login_styles.auth__main__form}
                onSubmit={(e) => e.preventDefault()}
              >  
              {isLogin||signup?(
                <>
                <input
                  className={login_styles.auth__main__input}
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              
                <input
                  className={login_styles.auth__main__input}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                
               </>
              ):(null
                )}
                 {restPassword&&(
                  <>
                  <input
                  className={login_styles.auth__main__input}
                  type="email"
                  placeholder="Email adress"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                </>
                )}
                {isLogin &&(
                  <>
                  <button className={login_styles.btn} onClick={login}>
                    Login
                  </button>
                   <Layout login={isLogin}/>
                   </>
                ) } {signup &&(
                  <button className={login_styles.btn} onClick={
                    ()=>{setIsLogin(!isLogin)
                    
                    register}}>
                    Sign up
                  </button>
                )}
                {restPassword &&(
                  <button className={login_styles.btn} onClick={register}>
                    send Rest Passsword Link
                  </button>
                )}
              </form>
            </div>
            {/* 🔁 Forgot Password (login only) */}
            {isLogin&& (
              <div
                className={login_styles.auth__forgot__password}
                onClick={()=>{
                setIsLogin(!isLogin)
                setRestPassword(!restPassword)
                resetPassword}}
                style={{ cursor: "pointer" }}>
                Forgot your password?
              </div>
               
            )}
            {/* 🔄 Switch */}
           {isLogin?(
            <button
              className={login_styles.auth__switch__btn}
              onClick={() => {
                setIsLogin(!isLogin);
                 setSignup(true)
                setLoginMessage("");
              }}
            >
              {isLogin 
              ? "Don't have an account?"
              : "Already have an account?"}
            </button>
              ):(
            <button
              className={login_styles.auth__switch__btn}
              onClick={() => {
                setIsLogin(true);
                setRestPassword(false)
                setLoginMessage("");
                 setSignup(false)
              }}
               >
              {isLogin||signup
                ?"Already have an account?"
                :"Go to login"
              }
            </button>
               )}
          </div>
        </div>
      </div>
    </div>
  );
}

