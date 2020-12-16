import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../api/HotelApi";

import FormPet from "../form/FormPet";

function EditPet(props) {
  const [allergyTags, setAllergyTags] = useState([]);

  const [diseaseTags, setDiseaseTags] = useState([]);

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

  const [errors, setErrors] = useState({
    name: null,
    animal: null,
  });

  const { id } = props.match.params;

  useEffect(() => {
    async function fetchPet() {
      try {
        const response = await api.get(`/pet/${id}`);
        setState({ ...response.data.pet[0] });
      } catch (err) {
        console.error(err);
      }
    }
    fetchPet();
  }, [id]);

  async function handleSubmit() {
    try {
      const response = await api.patch(`/pet/${id}`, state);
      console.log(response);
      props.history.push("/dashboard");
    } catch (err) {
      console.error(err);
    }
  }

  function handleChange(event) {
    if (event.currentTarget.files) {
      return setState({
        ...state,
        [event.currentTarget.name]: event.currentTarget.files[0],
      });
    }

    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    console.log(state);
  }

  const getDiseaseTags = (diseaseTags) => {
    setDiseaseTags(diseaseTags);
    setState({
      ...state,
      helthy: { disease: diseaseTags, allergy: allergyTags },
    });
  };

  const getAllergyTags = (allergyTags) => {
    setAllergyTags(allergyTags);
    setState({
      ...state,
      helthy: { disease: diseaseTags, allergy: allergyTags },
    });
  };

  const history = useHistory();

  function goBack() {
    history.push("/dashboard");
  }

  function deletar() {
    api.delete(`/pet/${id}`);
    props.history.push("/dashboard");
  }

  return (
    <div className="container">
      <div className="cadastro2">
        <h2>Editar Pet</h2>
        <FormPet
          state={state}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          onSubmit={handleSubmit}
          getAllergyTags={getAllergyTags}
          getDiseaseTags={getDiseaseTags}
          goBack={goBack}
          errors={errors}
        />
        <div className="delete-btn-div">
          <button className="botao-vermelho" type="button" onClick={deletar}>
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditPet;
