import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [state, setState] = useState("hidden");

  function handleScroll() {
    if (document.documentElement.scrollTop > 450) {
      setState("show");
    } else {
      setState("hidden");
    }
  }

  useEffect(() => {
    window.onscroll = () => handleScroll();
  }, []);

  return (
    <div className={state}>
      <div className="nav">
        <div className="nav-content">
          <Link className="nav-content" to="/">
            <p>Entrar</p>
          </Link>
          <Link className="nav-content" to="/">
            <p>Cadastre-se</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
