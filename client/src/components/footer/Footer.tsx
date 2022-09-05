import React from 'react'
import { FaFirstOrderAlt,FaBars } from "react-icons/fa";
import "./footer.scss"

const footer = () => {
  return (

<footer className="footerContainer">

      <div className="footerContainer__left">

        <div className="footerContainer__left__logoContainer">
          <FaFirstOrderAlt/>
          <p>Wheater</p>
          <p>App</p>
        </div>

        <p className="footerContainer__left__phrase">
         your wheather app always available
        </p>

      </div>

      <div className="footerContainer__right">
       
        <div className="footerContainer__right__name">
          <p>Created by: <span> Juan Sánchez Satorres</span></p>
        </div>

        <div className="footerContainer__right__github">
          <p> proyect github: <a href='https://github.com/JSSatorres/weather-app'> wheater app repo</a></p>
        </div>

      </div>

    </footer>
  )
}

export default footer