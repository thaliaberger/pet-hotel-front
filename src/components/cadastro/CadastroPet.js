import React from "react";
//import { Link } from "react-router-dom";
import "./Cadastro.css";

import NewPet from "../form/NewPet";

function CadastroPet() {
  return (
    <div className="container">
      <div className="cadastro cadastro-pet">
        <h2>Perfil do Pet</h2>
        <NewPet />
      </div>
    </div>
  );
}

export default CadastroPet;
