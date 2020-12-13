import React from "react";

function SimpleInput(props) {
	return (
		<>
			<input
				name={props.name}
				type={props.type}
				placeholder={props.label}
				value={props.value}
				onChange={props.onChange}
			/>
			{props.error ? <small>{props.error}</small> : <></>}
		</>
	);
}

export default SimpleInput;
