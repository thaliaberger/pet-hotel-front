import React from "react";
import "./Cadastro.css";

import NovoCadastro from "../form/NovoCadastro";
import LogoNavbar from "../dashboard/LogoNavbar";

function Cadastro() {
  return (
    <div>
      <LogoNavbar />
      <div className="container">
        <div className="cadastro2">
          <h2>Sobre você</h2>
          <NovoCadastro />
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
