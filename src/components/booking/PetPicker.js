import React from "react";
import "./PetPicker.css";

function PetPicker(props) {
  return (
    <div
      role="button"
      id={props.id}
      tabIndex={0}
      className={`container-petpicker${props.checked ? `-selected` : ``}`}
      onClick={props.onClick}
    >
      <div className="booking-pet-pic">
        <img src={props.picture} alt={`${props.name}-picture`} />
        <h3>{props.name}</h3>
      </div>
    </div>
  );
}

export default PetPicker;
