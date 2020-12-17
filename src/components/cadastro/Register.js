import React from "react";
import FormRegister from "../form/Register";
import "./Cadastro.css";

import LogoNavbar from "../dashboard/LogoNavbar";

function Register() {
  return (
    <div>
      <LogoNavbar />
      <div className="container">
        <div className="cadastro2">
          <h2>Cadastre-se</h2>
          <FormRegister />
        </div>
      </div>
    </div>
  );
}

export default Register;
