import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFirstOrderAlt,FaBars } from "react-icons/fa";
import { classNames } from "../../utils/class";

import "./nav.scss"

const Nav = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [userLogin, setUserLogin] = useState(true)

  const handleClick=()=>{
    setShowMobileMenu(!showMobileMenu)
    console.log(showMobileMenu);
    
  }
  return (
    <header className="container">
      <div className="container__wrapper">
        <div className="container__wrapper__logoContainer">
          <FaFirstOrderAlt/>
          <p>Wheater</p>
          <p>App</p>
        </div>
        <div className="container__wrapper__mobileIcon" onClick={handleClick}> <FaBars /></div>

        {(userLogin===false)?
          <ul className= {classNames("container__wrapper__menu", showMobileMenu ? "" : "colapsed")}>
            <li className="container__wrapper__menu__menuItem">
              <NavLink className="container__wrapper__menu__menuItem__link" to="/">Home</NavLink>
            </li>
            <li className="container__wrapper__menu__menuItem">
              <NavLink className="container__wrapper__menu__menuItem__link" to="/login">Login</NavLink>
            </li>
            <li className="container__wrapper__menu__menuItem">
              <NavLink className="container__wrapper__menu__menuItem__link" to="/register">Register</NavLink>
            </li>
          </ul>    
        :<ul className= {classNames("container__wrapper__menu", showMobileMenu ? "" : "colapsed")}>
        <li className="container__wrapper__menu__menuItem">
          <NavLink className="container__wrapper__menu__menuItem__link" to="/">Home</NavLink>
        </li>
        <li className="container__wrapper__menu__menuItem">
          <NavLink className="container__wrapper__menu__menuItem__link" to="/Profile">Profile</NavLink>
        </li>
        <li className="container__wrapper__menu__menuItem">
          <NavLink className="container__wrapper__menu__menuItem__link" to="/">My Places</NavLink>
        </li>
        <li className="container__wrapper__menu__menuItem">
          <NavLink className="container__wrapper__menu__menuItem__link" to="/">ill</NavLink>
        </li>
      </ul>    }

        


      </div>
    </header>
    )
};

export default Nav;
