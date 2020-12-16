import React from "react";

import dog from "../../images/4.png";
import cat from "../../images/1.png";
import bunny from "../../images/3.png";
import dino from "../../images/2.png";

function RadioInput(props) {
  return (
    <div className="radio-input-container">
      <form className="radio-input" action="">
        <input
          type="radio"
          id="cat"
          name="animal"
          value="Gato"
          onChange={props.onChange}
        />
        <img src={cat} alt="cat icon" />
        <input
          type="radio"
          id="dog"
          name="animal"
          value="Cachorro"
          onChange={props.onChange}
        />
        <img src={dog} alt="dog icon" />
        <input
          type="radio"
          id="bunny"
          name="animal"
          value="Coelho"
          onChange={props.onChange}
        />
        <img src={bunny} alt="bunny icon " />
        <input
          type="radio"
          id="dino"
          name="animal"
          value="Dinossauro"
          onChange={props.onChange}
        />
        <img src={dino} alt="dinossaur icon" />
      </form>
    </div>
  );
}

export default RadioInput;
