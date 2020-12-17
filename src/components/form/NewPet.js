import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FormPet from "./FormPet";

import api from "../../api/HotelApi";
import "./TagInput.css";

function NewPet() {
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

  const [errors, setErrors] = useState({
    name: null,
    animal: null,
    genre: null,
    size: null,
    picture: null,
  });

  const history = useHistory();

  function goBack() {
    history.push("/dashboard");
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

  async function handleFileUpload(file) {
    try {
      const uploadData = new FormData();

      uploadData.append("img-upload", file);

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
        picture: uploadedImageUrl,
      });

      console.log(response);

      history.push("/dashboard");
    } catch (error) {
      console.log(error.response);
      setErrors({ ...error.response.data.errors });
    }
  }

  return (
    <FormPet
      state={state}
      handleChange={handleChange}
      onSubmit={handleSubmit}
      getAllergyTags={getAllergyTags}
      getDiseaseTags={getDiseaseTags}
      goBack={goBack}
    />
  );
}

export default NewPet;
