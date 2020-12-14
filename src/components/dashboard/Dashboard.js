import React from "react";
import "./Dashboard.css";

import Btn from "../form/Btn";
import AboutHuman from "./AboutHuman";
import AboutPet from "./AboutPet";
import Agendamentos from "./Agendamentos";
import NovoAgendamento from "./NovoAgendamento";

function Dashboard() {
  return (
    <div className="dash-container">
      <div className="dashboard">
        <div className="sobre">
          <AboutHuman />
          <AboutPet />
          <Btn type="submit" color="laranja" label="Editar" />
          <Btn targetUrl="/novo-pet" color="azul" label="Adicionar Pet" />
        </div>
        <div className="agenda">
          <Agendamentos />
          <NovoAgendamento />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
