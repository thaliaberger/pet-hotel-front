import React, { useState, useEffect } from "react";
import api from "../../api/HotelApi";

import NewPet from "../../components/form/NewPet";

function EditPet(props) {
  const [state, setState] = useState({
    name: "",
    animal: "",
    size: "",
    genre: "",
    helthy: {
      allergy: [],
      disease: [],
    },
    picture: "",
    recomendations: "",
  });

  const { id } = props.match.params;

  useEffect(() => {
    async function fetchPet() {
      try {
        const response = await api.get(`/pet/${id}`);
        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchPet();
  }, [id]);

  async function handleSubmit() {
    try {
      const response = await api.patch(`/pet/${id}`, state);

      props.history.push("/dashboard");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="container">
      <div className="cadastro2">
        <h1>Editar Pet</h1>
        <NewPet state={state} setState={setState} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default EditPet;
