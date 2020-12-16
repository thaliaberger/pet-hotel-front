import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FormPet from "./FormPet";

import api from "../../api/HotelApi";

import "./TagInput.css";

function NewPet() {
<<<<<<< HEAD
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
  });

  const history = useHistory();

  const size = ["Grande", "Médio", "Pequeno"];

  const genre = ["Macho", "Fêmea"];

  function goBack() {
    history.push("/dashboard");
  }

  function handleChange(event) {
    if (event.currentTarget.files) {
      return setState({
        ...state,
        [event.currentTarget.name]: event.currentTarget.files[0],
      });
      console.log(state);
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
        id="genre"
        name="genre"
        options={genre}
        value={state.genre}
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
=======
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
			console.log(state);
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
			errors={errors}
		/>
	);
>>>>>>> master
}

export default NewPet;
