import React from "react";
import { Link } from "react-router-dom";

function Btn(props) {
	return props.type ? (
		<button type={props.type} className={`botao-${props.color}`}>
			{props.label}
		</button>
	) : (
		<Link to={props.targetUrl}>
			<button className={`botao-${props.color}`}>{props.label}</button>
		</Link>
	);
}

export default Btn;
