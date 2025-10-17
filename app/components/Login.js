import { FaUser } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa"; // ✅ Google icon
import login_styles from "../components/Login.module.css"
export default function Login() {
  return (
    <div id="__next">
      <div className={`${login_styles.wrapper} ${login_styles.wrapper__full}`}>
        <div className={`${login_styles.sidebar__overlay} ${login_styles.sidebar__overlay__hidden}`}></div>
        <div className={login_styles.auth__wrapper}>
          <div className={login_styles.auth}>
            <div className={login_styles.auth__content}>
              <div className={login_styles.auth__title}>Log in to Summarist</div>
              {/* Guest Login Button */}
              <button className={`${login_styles.btn} ${login_styles.guest__btn__wrapper}`}>
                <figure className={`${login_styles.google__icon__mask} ${login_styles.guest__icon__mask}`}>
                  <FaUser className={login_styles.google__icon__mask} />
                </figure>
                <div>Login as a Guest</div>
              </button>
              <div className={login_styles.auth__separator}>
                <span className={login_styles.auth__separator__text}>or</span>
              </div>
              {/* Google Login Button */}
              <button className={`${login_styles.btn} ${login_styles.google__btn__wrapper}`}>
                <figure className={login_styles.google__icon__mask}>
                  <img src="googleLogo.jpg" className={login_styles.google__icon__mask} />
                </figure>
                <div>Login with Google</div>
              </button>
              <div className={login_styles.auth__separator}>
                <span className={login_styles.auth__separator__text}>or</span>
              </div>
              {/* Main Login Form */}
              <form className={login_styles.auth__main__form}>
                <input
                  className={login_styles.auth__main__input}
                  type="text"
                  placeholder="Email Address"
                />
                <input
                  className={login_styles.auth__main__input}
                  type="password"
                  placeholder="Password"
                />
                <button className={login_styles.btn}>
                  <span>Login</span>
                </button>
              </form>
               </div>
            <div className={login_styles.auth__forgot__password}>
              Forgot your password?
            </div>
            <button className={login_styles.auth__switch__btn}>
              Don't have an account?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
