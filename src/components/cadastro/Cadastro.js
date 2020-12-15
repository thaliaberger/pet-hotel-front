import React from "react";
import "./Cadastro.css";

import FormCadastro from "../form/FormCadastro";

function Cadastro() {
	return (
		<div className="container">
			<div className="cadastro">
				<h2>Sobre você</h2>
				<FormCadastro />
			</div>
		</div>
	);
}

export default Cadastro;
