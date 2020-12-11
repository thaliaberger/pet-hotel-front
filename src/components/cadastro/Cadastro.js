import React from "react";
import { Link } from "react-router-dom";
import "./Cadastro.css";

function Cadastro() {
  return (
    <div className="container">
      <div className="cadastro">
        <h2>Sobre você</h2>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Sobrenome" />
          <input type="number" placeholder="Telefone" />
          <input type="text" placeholder="Endereço" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <div className="botoes-cadastro">
            <Link to="/">
              <button className="botao-azul">Voltar</button>
            </Link>
            <button type="submit" className="botao-laranja">
              Ok
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
