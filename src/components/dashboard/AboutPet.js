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
        console.log(response);
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
              <div className="each-pet">
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
                    {`${pet.helthy.allergy}`
                      ? `Allergy: ${pet.helthy.allergy}`
                      : ""}
                  </p>
                  <p>
                    {`${pet.helthy.disease}`
                      ? `Diseases: ${pet.helthy.disease}`
                      : ""}
                  </p>
                  <p>
                    {`${pet.recomendations}`
                      ? `Recomendações: ${pet.recomendations}`
                      : ""}
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
