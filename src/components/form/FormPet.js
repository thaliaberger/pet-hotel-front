import React from "react";
import SimpleInput from "./SimpleInput";
import SelectInput from "./SelectInput";
import FileInput from "./FileInput";
import RadioInput from "./RadioInput";
import InputTags from "react-input-tags-hooks";

function FormPet(props) {
	const size = ["Grande", "Médio", "Pequeno"];
	const genre = ["Macho", "Fêmea"];

	console.log(props);

	return (
		<form onSubmit={props.handleSubmit}>
			<SimpleInput
				name="name"
				label="Nome"
				type="text"
				value={props.state.name}
				onChange={props.handleChange}
				error={props.errors.name}
			/>
			<RadioInput onChange={props.handleChange} />
			<SelectInput
				label="Selecionar Porte"
				id="size"
				name="size"
				options={size}
				value={props.state.size}
				onChange={props.handleChange}
			/>
			<SelectInput
				label="Selecionar Gênero"
				id="genre"
				name="genre"
				options={genre}
				value={props.state.genre}
				onChange={props.handleChange}
			/>
			<SimpleInput
				name="recomendations"
				label="Recomendações"
				type="text"
				value={props.state.recomendations}
				onChange={props.handleChange}
			/>
			<InputTags
				onTag={props.getAllergyTags}
				tagColor="#fc9c60"
				placeHolder="Alergias"
			/>
			<InputTags
				onTag={props.getDiseaseTags}
				tagColor="#fc9c60"
				placeHolder="Doenças"
			/>
			<FileInput
				id="picture"
				name="picture"
				label="Enviar Imagem"
				value={props.state.picture}
				onChange={props.handleChange}
			/>
			<div className="botoes-cadastro">
				<button className="botao-azul" type="button" onClick={props.goBack}>
					Voltar
				</button>
				<button
					className="botao-laranja"
					type="button"
					onClick={props.onSubmit}
				>
					Ok
				</button>
			</div>
		</form>
	);
}
export default FormPet;
