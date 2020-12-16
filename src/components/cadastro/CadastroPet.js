import React from "react";
import "./Cadastro.css";

import NewPet from "../form/NewPet";
import LogoNavbar from "../dashboard/LogoNavbar";

function CadastroPet() {
  return (
    <div>
      <LogoNavbar />
      <div className="container">
        <div className="cadastro2">
          <h2>Perfil do Pet</h2>
          <NewPet />
        </div>
      </div>
    </div>
  );
}

export default CadastroPet;
