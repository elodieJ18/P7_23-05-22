import React, { useState } from "react";
import "../../css/styles.css";
import logo from "../../assets/logo-groupomania.png";
import { Signup } from "./Signup";
import { Login } from "./Login";


export const Connexion = () => {

  const [signUpModal, setSignUpModal] = useState(true);
  const [loginModal, setLoginModal] = useState(false);

  const handleModals = (e) => {
    if (e.target.id === "loginRegister"){
      setLoginModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "register") {
      setSignUpModal(false);
      setLoginModal(true);
    }
  }

  return (
    <div className="bloc-connexion">
      <div className="navbar">
        <img className="logo" src={logo} alt="groupomania" />
      </div>
      <div className="bloc-connexion-content">
        <div className="bloc-connexion-element">
        {loginModal && <Login />}
          <p className={loginModal ? null : "active-btn-connexion" }>Need an account ? <a  id="loginRegister" onClick={handleModals} >Register</a></p>
      
        {signUpModal && <Signup />}
         <p className={signUpModal ? null : "active-btn-connexion" }>Already have an account ?<a id="register" onClick={handleModals}> Login</a></p> 
 
        </div>

      </div>
    </div>
  );
}

export default Connexion;
