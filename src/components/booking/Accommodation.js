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
      <div className="room-title">
        <h4>{props.name}</h4>
        <img className="room-img" src={props.imageUrl} alt="#" />
      </div>
      <div className="room-info">
        <p>Valor da diária: R$ {props.value.toFixed(2)}</p>
        <p>Tipo da acomodação: {props.type} </p>
        <p>Acomoda até {props.qtd} pets</p>
      </div>
    </div>
  );
}

export default Accommodation;
