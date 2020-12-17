import React from "react";
import "./LogoNavbar.css";
import { Link } from "react-router-dom";
import logo2 from "../../images/logo2.png";

function LogoNavbar() {
  return (
    <nav className="logo-navbar">
      <Link to="/dashboard">
        <img className="logo2" src={logo2} />
      </Link>
    </nav>
  );
}

export default LogoNavbar;
