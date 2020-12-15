import React, { useState } from "react";
import axios from "axios";
import SimpleInput from "./SimpleInput";
import Btn from "./Btn";
import { useHistory } from "react-router-dom";

function Register() {
	const [state, setState] = useState({ email: "", password: "" });
	const [errors, setErrors] = useState({
		email: null,
		password: null,
	});
	const history = useHistory();

	function handleChange(event) {
		setState({ ...state, [event.target.name]: event.target.value });
	}

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			const response = await axios.post(
				"http://ec2-52-14-163-166.us-east-2.compute.amazonaws.com/api/user/signup",
				state
			);
			console.log(response.data);
			history.push("/");
		} catch (error) {
			console.log(error.response);
			setErrors({ ...error.response.data.errors });
		}
	}

  return (
    <form onSubmit={handleSubmit}>
      <SimpleInput
        name="email"
        label="e-mail"
        type="text"
        value={state.email}
        onChange={handleChange}
        error={errors.email}
      />
      <SimpleInput
        name="password"
        label="Password"
        type="password"
        value={state.password}
        onChange={handleChange}
        error={errors.password}
      />
      <div className="botoes-cadastro">
        <Btn targetUrl="/" color="azul" label="Voltar" />
        <Btn type="submit" color="laranja" label="Cadastrar" />
      </div>
    </form>
  );
}

export default Register;
