import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import { useHistory, Link } from "react-router-dom";
import api from "../../api/HotelApi";
import Btn from "../form/Btn";

function AboutPet() {
  const [pets, setPets] = useState({});

  const history = useHistory();

  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await api.get("/pet");
        setPets({ ...response.data });
      } catch (err) {
        console.error(err.response);
      }
    }
    fetchPets();
  }, [history]);

  return (
    <div className="sobre-pet">
      <div className="all-pets">
        {pets.pets
          ? pets.pets.map((pet) => (
              <div className="each-pet" key={pet._id}>
                <img src={pet.picture} alt="pet" />
                <div className="pet-text">
                  <p>
                    <strong>Nome: </strong>
                    {pet.name}
                  </p>
                  <p>
                    <strong>Animal: </strong>
                    {pet.animal}
                  </p>
                  <p>
                    <strong>Porte: </strong>
                    {pet.size}
                  </p>
                  <p>
                    <strong>Gênero: </strong>
                    {pet.genre}
                  </p>
                  <p>
                    <strong>
                      {`${pet.helthy.allergy}` ? "Alergias: " : ""}{" "}
                    </strong>
                    {`${pet.helthy.allergy}` ? `${pet.helthy.allergy}` : ""}
                  </p>
                  <p>
                    <strong>
                      {`${pet.helthy.disease}` ? "Doenças: " : ""}{" "}
                    </strong>
                    {`${pet.helthy.disease}` ? `${pet.helthy.disease}` : ""}
                  </p>
                  <p>
                    <strong>
                      {`${pet.recomendations}` ? "Recomendações: " : ""}{" "}
                    </strong>
                    {`${pet.recomendations}` ? `${pet.recomendations}` : ""}
                  </p>
                </div>
                <div className="edit-pet-btn">
                  <Link to={`/pet/${pet._id}`}>
                    <Btn type="submit" color="laranja" label="Editar" />
                  </Link>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default AboutPet;
