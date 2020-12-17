import React, { useState } from "react";
import Btn from "../form/Btn";
import Login from "../form/Login";

function SignIn() {
  const [error, setError] = useState(false);

  return (
    <div className="home-info">
      <Login setError={setError} />
      <div className="barra">
        {error ? (
          <div className="error">
            <small>
              <p>
                Credenciais inválidas.
                <br />
                Tente novamente ou cadastre-se abaixo.
              </p>
            </small>
          </div>
        ) : (
          <></>
        )}
        <div className="barra-home">
          <p>———————————</p>
        </div>
      </div>

      <small>
        <p>Ainda não tem conta?</p>
      </small>
      <Btn targetUrl="/register" color="azul" label="Cadastre-se" />
    </div>
  );
}

export default SignIn;
