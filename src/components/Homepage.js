import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="home">
      <div class="container">
        <img
          class="logo"
          src="https://i.ibb.co/ZYcbSj1/Design-sem-nome-4.png"
          alt="logo"
        />
        <div class="home-info">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />

          <Link to="/">
            <button type="submit" class="login">
              Entrar
            </button>
          </Link>
          <p>——————————————</p>

          <small>
            <p>Ainda não tem conta?</p>
          </small>
          <Link to="/cadastro">
            <button class="signup">Cadastre-se</button>
          </Link>
        </div>
      </div>

      {/* <div class="footer">
        <footer>
          <p>Developed by:</p>
        </footer> */}
      {/* </div> */}
    </div>
  );
}

export default Homepage;
