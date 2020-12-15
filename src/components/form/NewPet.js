import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import InputTags from "react-input-tags-hooks";
import api from "../../api/HotelApi";

import "./TagInput.css";

import SimpleInput from "./SimpleInput";
import SelectInput from "./SelectInput";
import FileInput from "./FileInput";
import RadioInput from "./RadioInput";

function NewPet() {
  const [allergyTags, setAllergyTags] = useState([]);

  const [diseaseTags, setDiseaseTags] = useState([]);

  const [state, setState] = useState({
    name: "",
    animal: "",
    size: "",
    breed: "",
    helthy: {
      allergy: [],
      disease: [],
    },
    picture: "",
    recomendations: "",
  });

  const getDiseaseTags = (diseaseTags) => {
    setDiseaseTags(diseaseTags);
    setState({ ...state, helthy: { disease: diseaseTags } });
  };

  const getAllergyTags = (allergyTags) => {
    setAllergyTags(allergyTags);
    setState({ ...state, helthy: { allergy: allergyTags } });
  };

  const [errors, setErrors] = useState({
    name: null,
    animal: null,
  });

  const history = useHistory();

  const size = ["Big", "Medium", "Small"];

  const breed = ["Macho", "Fêmea"];

  function goBack() {
    history.push("/dashboard");
  }

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
    console.log(state);
  }

  async function handleFileUpload(file) {
    try {
      const uploadData = new FormData();

      uploadData.append("picture", file);

      const response = await api.post("/file-upload", uploadData);

      return response.data.fileUrl;
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const uploadedImageUrl = await handleFileUpload(state.picture);

      const response = await api.post("/pet", {
        ...state,
        state: uploadedImageUrl,
      });

      console.log(response);

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
      <RadioInput onChange={handleChange} />
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
      <InputTags
        onTag={getAllergyTags}
        tagColor="#fc9c60"
        placeHolder="Alergias"
      />
      <InputTags
        onTag={getDiseaseTags}
        tagColor="#fc9c60"
        placeHolder="Doenças"
      />
      <FileInput
        id="picture"
        name="picture"
        label="Enviar Imagem"
        value={state.picture}
        onChange={handleChange}
      />
      <div className="botoes-cadastro">
        <button className="botao-azul" type="button" onClick={goBack}>
          Voltar
        </button>
        <button className="botao-laranja" type="button" onClick={handleSubmit}>
          Ok
        </button>
      </div>
    </form>
  );
}

export default NewPet;
