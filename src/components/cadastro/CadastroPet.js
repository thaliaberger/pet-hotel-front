import React from "react";
import "./CadastroPet.css";

import NewPet from "../form/NewPet";
import LogoNavbar from "../dashboard/LogoNavbar";

function CadastroPet() {
  return (
    <div>
      <LogoNavbar />
      <div className="container">
        <div className="cadastro3">
          <h2>Perfil do Pet</h2>
          <NewPet />
        </div>
      </div>
    </div>
  );
}

export default CadastroPet;
