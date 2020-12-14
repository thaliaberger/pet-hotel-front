import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import SimpleInput from "./SimpleInput";
import SelectInput from "./SelectInput";
import FileInput from "./FileInput";
import RadioInput from "./RadioInput";
import Btn from "./Btn";

function NewPet() {
  const [state, setState] = useState({
    name: "",
    animal: "",
    size: "",
    breed: "",
    allergy: "",
    disease: "",
    picture: "",
    recomendations: "",
  });
  const [errors, setErrors] = useState({
    name: null,
    animal: null,
  });
  const history = useHistory();

  const size = ["Big", "Medium", "Small"];

  const breed = ["Macho", "Fêmea"];

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://ec2-52-14-163-166.us-east-2.compute.amazonaws.com/api/pet",
        state
      );
      console.log(response.data);
      history.push("/dashboard");
    } catch (error) {
      console.log(error.response);
      setErrors({ ...error.response.data.errors });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <SimpleInput
        name="name"
        label="Nome"
        type="text"
        value={state.name}
        onChange={handleChange}
        error={errors.name}
      />
      <RadioInput />
      <SelectInput
        label="Selecionar Porte"
        id="size"
        name="size"
        options={size}
        value={state.size}
        onChange={handleChange}
      />
      <SelectInput
        label="Selecionar Gênero"
        id="breed"
        name="breed"
        options={breed}
        value={state.breed}
        onChange={handleChange}
      />
      <SimpleInput
        name="recomendations"
        label="Recomendações"
        type="text"
        value={state.recomendations}
        onChange={handleChange}
      />
      <FileInput
        id="petImage"
        name="petImage"
        label="Enviar Imagem"
        value={state.picture}
        onChange={handleChange}
      />
      <div className="botoes-cadastro">
        <Btn targetUrl="/dashboard" color="azul" label="Voltar" />
        <Btn type="submit" color="laranja" label="Ok" />
      </div>
    </form>
  );
}

export default NewPet;
