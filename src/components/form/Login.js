import React, { useState, useContext } from "react";
import axios from "axios";
import SimpleInput from "./SimpleInput";
import Btn from "./Btn";
import { AuthContext } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function Login(props) {
	const [state, setState] = useState({ email: "", password: "" });
	const authContext = useContext(AuthContext);
	const history = useHistory();

	function handleChange(event) {
		setState({ ...state, [event.target.name]: event.target.value });
	}

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			const response = await axios.post(
				"http://ec2-52-14-163-166.us-east-2.compute.amazonaws.com/api/user/login",
				state
			);
			authContext.setLoggedInUser({ ...response.data });
			localStorage.setItem(
				"loggedInUser",
				JSON.stringify({ ...response.data })
			);

			history.push("/dashboard");
		} catch (error) {
			props.setError(true);
		}
	}

	return (
		<div className="signin">
			<form onSubmit={handleSubmit}>
				<SimpleInput
					name="email"
					label="e-mail"
					type="text"
					value={state.email}
					onChange={handleChange}
				/>
				<SimpleInput
					name="password"
					label="Password"
					type="password"
					value={state.password}
					onChange={handleChange}
				/>
				<Btn type="submit" color="laranja" label="Entrar" />
			</form>
		</div>
	);
}

export default Login;
