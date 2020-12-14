import React from "react";
import FormRegister from "../form/Register";
import "./Cadastro.css";
import { Link } from "react-router-dom";

function Register() {
	return (
		<div className="container">
			<div className="cadastro">
				<h2>Cadastre-se</h2>

				<FormRegister />

				<Link to="/api/auth/google">
					Cadastrar com Google
				</Link>
			</div>
		</div>
	);
}

export default Register;
