import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

import Navbar from "./Navbar";

import alceu from "../../images/alceu (2).jpeg";
import lummy from "../../images/lummy.jpeg";
import zoe from "../../images/zoe.jpeg";
import earl from "../../images/earl.jpeg";
import amora from "../../images/amora.jpeg";
import cristoff from "../../images/cristoff.jpeg";
import buzz from "../../images/buzz.jpg";
import logo from "../../images/logo.png";

function Homepage() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        <img className="logo" src={logo} alt="logo" />
        <div className="home-info">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />

          <Link to="/">
            <button type="submit" className="botao-laranja">
              Entrar
            </button>
          </Link>
          <p>———————————</p>

          <small>
            <p>Ainda não tem conta?</p>
          </small>
          <Link to="/cadastro">
            <button className="botao-azul">Cadastre-se</button>
          </Link>
        </div>
      </div>
      <div className="about">
        <h2>O hotel</h2>

        <p>
          Um lugar para deixar seu pet com toda tranquilidade e segurança.
          <br></br>
          Profissionais capacitados com anos de experiência em comportamento
          animal.
        </p>
      </div>
      <div className="structure">
        <h2>Estrutura</h2>

        <div className="structure-imgs">
          <img src="https://petshopcontrol.blob.core.windows.net/blog/blog/wp-content/uploads/hotel-para-cachorros-e-gatos-1-768x432.jpg" />
          <img src="https://petshopcontrol.blob.core.windows.net/blog/blog/wp-content/uploads/hotel-para-chorros-gatos.png" />
          <img src="https://petshopcontrol.blob.core.windows.net/blog/blog/wp-content/uploads/hotel-cachorros-e-gatos.jpg" />
        </div>
      </div>
      <div className="clients">
        <h2>Clientes VIP</h2>

        <div className="client-pets">
          <div className="client-pet">
            <img className="pet-img" src={amora} />
            <p>Amora</p>
          </div>
          <div className="client-pet">
            <img className="pet-img" src={lummy} />
            <p>Lummy</p>
          </div>
          <div className="client-pet">
            <img className="pet-img" src={alceu} />
            <p>Alceu</p>
          </div>
          <div className="client-pet">
            <img className="pet-img" src={buzz} />
            <p>Buzz</p>
          </div>
        </div>
        <div className="client-pets">
          <div className="client-pet">
            <img className="pet-img" src={zoe} />
            <p>Zoe</p>
          </div>

          <div className="client-pet">
            <img className="pet-img" src={buzz} />
            <p>Buzz</p>
          </div>

          <div className="client-pet">
            <img className="pet-img" src={cristoff} />
            <p>Cristoff</p>
          </div>

          <div className="client-pet">
            <img className="pet-img" src={earl} />
            <p>Earl</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <footer>
          <p>
            Projeto desenvolvido para o bootcamp de Web Development da IRONHACK.
          </p>
          <div className="footer-links">
            <Link className="footer-link" to="/">
              Rodrigo Matos | GitHub
            </Link>
            <Link className="footer-link" to="/">
              Laura Ferraz | GitHub
            </Link>
            <Link className="footer-link" to="/">
              Thalía Berger | GitHub
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Homepage;
