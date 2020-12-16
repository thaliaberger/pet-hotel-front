import React from "react";
import "./Dashboard.css";

import Btn from "../form/Btn";
import AboutHuman from "./AboutHuman";
import AboutPet from "./AboutPet";
import Agendamentos from "./Agendamentos";

function Dashboard() {
  return (
    <div className="dash-container">
      <div className="dashboard">
        <div className="first-row">
          <div className="human-div">
            <AboutHuman />
            <Btn type="submit" color="laranja" label="Editar" />
            <Btn targetUrl="/cadastro" color="azul" label="Fazer cadastro" />
          </div>

          <div className="agenda">
            <Agendamentos />
            <Btn targetUrl="/booking" color="azul" label="Agendar estadia" />
          </div>
        </div>

        <div className="pet-div">
          <h2>Meus Pets</h2>
          <AboutPet />
          <div className="add-pet-btn">
            <Btn targetUrl="/novo-pet" color="azul" label="Adicionar Pet" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
