import React from "react";
import "./Accommodation.css";

function Accommodation(props) {
	return (
		<div
			role="button"
			id={props.id}
			tabIndex={0}
			className={`container-accommodation${props.checked ? `-selected` : ``}`}
			onClick={props.onClick}
			preco={props.value}
		>
			{props.name}
			<div className="">
				<img src={props.imageUrl} alt="#" />
				<div>
					<p>Valor da diária: R$ {props.value.toFixed(2)}</p>
					<p>Tipo da acomodação: {props.type} </p>
					<p>Acomoda até {props.qtd} pets</p>
				</div>
			</div>
		</div>
	);
}

export default Accommodation;
