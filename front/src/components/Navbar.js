import React from "react";
import "../css/styles.css";
import logo from "../assets/logo-groupomania.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faHomeLg, faComments, faUserPen, faCommentDots, faUser, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

library.add(fas, faHomeLg, faComments, faCommentDots,faUserPen, faUser, faCirclePlus);


export const Navbar = () => {
  const userData = useSelector((state) => state.userReducer);
  return (
    <div className="header">
      <div className="header-content">
      <NavLink  to="/">
        <img className="logo" src={logo} alt="groupomania" />
      </NavLink>
      <NavLink  to="/profil">
        <FontAwesomeIcon className="profil-icon" icon="user" />
      </NavLink>
      
        <div className="navbar">
          <div className="navbar-container">
              <NavLink to="/">
                <div className="navbar-element">
                  <p className="linkicon"><FontAwesomeIcon icon="home-lg" /></p>
                  <p className="linkName">home</p>
                </div>
              </NavLink>
              <NavLink  to="/">
                <div className="navbar-element">
                  <p className="linkicon"><FontAwesomeIcon icon="circle-plus" /></p>
                  <p className="linkName">Create post</p>
                </div>
              </NavLink>
              <NavLink  to="/">
                <div className="navbar-element">
                <p className="linkicon"><FontAwesomeIcon icon="comment-dots" /></p>
                <p  className="linkName">Comments</p>
                </div>
              </NavLink>
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
