import React from "react";
import "./Cadastro.css";

import NovoCadastro from "../form/NovoCadastro";

function Cadastro() {
	return (
		<div className="container">
			<div className="cadastro">
				<h2>Sobre você</h2>
				<NovoCadastro />
			</div>
		</div>
	);
}

export default Cadastro;
