import React from "react";

function SelectInput(props) {
  return (
    <div className="">
      <select
        multiple={props.multiple}
        className="select"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      >
        <option value="" disabled selected>
          {props.label}
        </option>
        {props.options.map((option) => (
          <option
            key={option.value ? option.value : option}
            value={option.value ? option.value : option}
          >
            {option.text ? option.text : option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
