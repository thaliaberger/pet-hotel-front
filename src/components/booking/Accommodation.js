import React from "react";

function Accommodation(props) {
	return (
		<div>
			<div>{props.name}</div>
			<img src={props.imageUrl} alt="#" />
			<div>
				<p>Valor da diária: R$ {props.value.toFixed(2)}</p>
				<p>Tipo da acomodação: {props.type} </p>
				<p>Acomoda até {props.qtd} pets</p>
			</div>
		</div>
	);
}

export default Accommodation;
