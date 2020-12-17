import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import { useHistory } from "react-router-dom";
import api from "../../api/HotelApi";

function AboutHuman() {
  const [humanState, setHumanState] = useState({
    name: null,
    mobile: null,
    adress: {
      street: null,
      number: null,
      complement: null,
      city: null,
      state: null,
      zipcode: null,
    },
  });

  const history = useHistory();

  useEffect(() => {
    async function fetchHuman() {
      try {
        const response = await api.get("/client");
        if (response.data.user) {
          setHumanState({ ...response.data.user });
        }
      } catch (err) {
        console.error(err.response);
      }
    }
    fetchHuman();
  }, [history]);

  console.log(humanState);

  return (
    <div className="sobre-humano">
      <div>
        <h2>Meu Perfil</h2>
        <div>
          <div>
            <p>
              <strong>Nome: </strong>
              {humanState.name}
            </p>
            <p>
              <strong>Telefone: </strong>
              {humanState.mobile}
            </p>
            <p>
              <strong>Endereço: </strong>
              {humanState.adress.street}, {humanState.adress.number},{" "}
              {humanState.adress.complement}
            </p>
            <p>
              {humanState.adress.city}, {humanState.adress.state}
            </p>
            <p>CEP: {humanState.adress.zipcode}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHuman;
