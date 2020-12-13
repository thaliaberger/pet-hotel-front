import React from "react";
import Btn from "../form/Btn";
import Login from "../form/Login";

function SignIn() {
  return (
    <div className="home-info">
      <Login />
      <div className="barra">
        <p>———————————</p>
      </div>

      <small>
        <p>Ainda não tem conta?</p>
      </small>
      <Btn targetUrl="/register" color="azul" label="Cadastre-se" />
    </div>
  );
}

export default SignIn;
