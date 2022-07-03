import React from "react";
import "./Topbar.css";
import {NavLink} from "react-router-dom";

const Topbar = () => {
  return(
  <div className="topbar">
      <div className="topbar-left">
      <i className="topbar-social-icon fa-brands fa-instagram"></i>
      <i className="topbar-social-icon fa-brands fa-linkedin"></i>
      <i className="topbar-social-icon fa-brands fa-facebook"></i>
      <i className="topbar-social-icon fa-brands fa-twitter"></i>
      </div>
      <div className="topbar-center">
          <ul className="topbar-list">
              <li className="topbar-list-item"> 
                    <NavLink to="/">HOME</NavLink>
              </li>
              <li className="topbar-list-item">ABOUT</li>
              <li className="topbar-list-item">CONTACT</li>
              <li className="topbar-list-item">
                  <NavLink to="/create">CREATE PROPERTY</NavLink> </li>
              <li className="topbar-list-item">LOGOUT</li>


          </ul>
      </div>
      <div className="topbar-right">
          <img className="topbar-profile" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"/>
          <i className=" topbar-search fa-solid fa-magnifying-glass"></i>
          
      </div>
      </div>
  )
};

export default Topbar;
