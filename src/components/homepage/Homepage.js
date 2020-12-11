import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="logo"
          src="https://i.ibb.co/ZYcbSj1/Design-sem-nome-4.png"
          alt="logo"
        />
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
            <img
              className="pet-img"
              src="https://i.ibb.co/Wgt1hL1/20181226-174724.jpg"
            />
            <p>Buzz</p>
          </div>
          <div className="client-pet">
            <img
              className="pet-img"
              src="https://i.ibb.co/rw15P9Z/Whats-App-Image-2020-12-01-at-13-18-00.jpg"
            />
            <p>Lummy</p>
          </div>
          <div className="client-pet">
            <img
              className="pet-img"
              src="https://i.ibb.co/3Svc7K4/Whats-App-Image-2020-12-03-at-20-08-29.jpg"
            />
            <p>Alceu</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <footer>
          <p>
            Projeto desenvolvido para o bootcamp de Web Development da IRONHACK.
          </p>
          <Link to="/">Rodrigo </Link>
          <Link to="/">Laura </Link>
          <Link to="/">Thalía</Link>
        </footer>
      </div>
    </div>
  );
}

export default Homepage;
