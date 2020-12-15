import React from "react";
import FormRegister from "../form/Register";
import "./Cadastro.css";

function Register() {
	return (
		<div className="container">
			<div className="cadastro">
				<h2>Cadastre-se</h2>
				<FormRegister />
			</div>
		</div>
	);
}

export default Register;
