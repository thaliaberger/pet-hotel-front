import React from "react";
import "./Cadastro.css";

import NewPet from "../form/NewPet";

function CadastroPet() {
  return (
    <div className="container">
      <div className="cadastro2">
        <h2>Perfil do Pet</h2>
        <NewPet />
      </div>
    </div>
  );
}

export default CadastroPet;
