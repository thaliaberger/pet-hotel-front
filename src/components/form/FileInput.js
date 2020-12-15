import React from "react";

function FileInput(props) {
  return (
    <div className="">
      <div className="">
        <input
          type="file"
          className=""
          id={props.id}
          name={props.name}
          onChange={props.onChange}
        />
        <label className="" htmlFor={props.id}>
          {props.label}
        </label>
      </div>
    </div>
  );
}

export default FileInput;
