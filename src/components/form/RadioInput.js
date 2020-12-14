import React from "react";

import dog from "../../images/4.png";
import cat from "../../images/1.png";
import bunny from "../../images/3.png";
import dino from "../../images/2.png";

function RadioInput(props) {
  return (
    <div className="radio-input-container">
      <form className="radio-input" action="">
        <input type="radio" id="cat" name="animal" value="Cat" />
        <img src={cat} alt="cat icon" />
        <input type="radio" id="dog" name="animal" value="Dog" />
        <img src={dog} alt="dog icon" />
        <input type="radio" id="bunny" name="animal" value="Rabbit" />
        <img src={bunny} alt="bunny icon " />
        <input type="radio" id="dino" name="animal" value="Dinossaur" />
        <img src={dino} alt="dinossaur icon" />
      </form>
    </div>
  );
}

export default RadioInput;
