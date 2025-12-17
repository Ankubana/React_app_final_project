"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Login from "../login/page"; // Your Login component
import landing_styles from "./landing.module.css";

// Modal component using portal
function Modal({ children, onClose }) {
  const [portalContainer, setPortalContainer] = useState(null);

  useEffect(() => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    setPortalContainer(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  if (!portalContainer) return null;

  return createPortal(
    <div
      className="modal__overlay"
      onClick={onClose}
      style={{
     position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0,0.75)", // semi-transparent black
    backdropFilter: "blur(4px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    opacity:0.8, // fully visible
      
      }}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>,
    portalContainer
  );
}

// Landing component
function Landing({ setShowLogin }) {
  return (
    <section className={landing_styles.landing}>
      <div className={landing_styles.container}>
        <div className={landing_styles.row}>
          <div className={landing_styles.linding__wrapper}>
            <div className={landing_styles.landing__content}>
              <div className={landing_styles.landing__content__title}>
                Gain more knowledge <br className="Removie__tablate" />
                in less time
              </div>
              <div className={landing_styles.landing__content__subtitle}>
                Great summaries for busy people,
                <br className="Removie__tablate" />
                individuals who barely have time to read,
                <br className="Removie__tablate" />
                and even people who don’t like to read.
              </div>

              <button
                className={`${landing_styles.btn} ${landing_styles.home__cta__btn}`}
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            </div>

            <figure className={landing_styles.landing__img__wrapper}>
              <img
                src="landing.png"
                alt="landing"
                className={landing_styles.landing_img}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

// Landing page with modal
export default function LandingWithLoginModal() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Landing setShowLogin={setShowLogin} />
      {showLogin && <Modal onClose={() => setShowLogin(false)}><Login /></Modal>}
    </>
  );
}
