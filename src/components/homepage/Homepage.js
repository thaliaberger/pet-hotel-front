import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

import Navbar from "./Navbar";
import SignIn from "./SignIn";

import alceu from "../../images/alceu (2).jpeg";
import lummy from "../../images/lummy.jpeg";
import zoe from "../../images/zoe.jpeg";
import earl from "../../images/earl.jpeg";
import amora from "../../images/amora.jpeg";
import christoff from "../../images/cristoff.jpeg";
import buzz from "../../images/buzz.jpg";
import logo from "../../images/logo.png";
import simba from "../../images/simba.jpg";

function Homepage() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        <img className="logo" src={logo} alt="logo" />
        <SignIn />
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
          <img
            src="https://petshopcontrol.blob.core.windows.net/blog/blog/wp-content/uploads/hotel-para-cachorros-e-gatos-1-768x432.jpg"
            alt=""
          />
          <img
            src="https://petshopcontrol.blob.core.windows.net/blog/blog/wp-content/uploads/hotel-para-chorros-gatos.png"
            alt=""
          />
          <img
            src="https://petshopcontrol.blob.core.windows.net/blog/blog/wp-content/uploads/hotel-cachorros-e-gatos.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="clients">
        <h2>Clientes VIP</h2>

        <div className="client-pets">
          <div className="client-pet">
            <img className="pet-img" src={amora} alt="amora" />
            <p>Amora</p>
          </div>
          <div className="client-pet">
            <img className="pet-img" src={lummy} alt="lummy" />
            <p>Lummy</p>
          </div>
          <div className="client-pet">
            <img className="pet-img" src={alceu} alt="alceu" />
            <p>Alceu</p>
          </div>
          <div className="client-pet">
            <img className="pet-img" src={buzz} alt="buzz" />
            <p>Buzz</p>
          </div>
        </div>
        <div className="client-pets">
          <div className="client-pet">
            <img className="pet-img" src={zoe} alt="zoe" />
            <p>Zoe</p>
          </div>

          <div className="client-pet">
            <img className="pet-img" src={simba} alt="buzz" />
            <p>Simba</p>
          </div>

          <div className="client-pet">
            <img className="pet-img" src={christoff} alt="christoff" />
            <p>Christoff</p>
          </div>

          <div className="client-pet">
            <img className="pet-img" src={earl} alt="earl" />
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
