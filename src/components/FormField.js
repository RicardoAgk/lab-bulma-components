import React from "react";
import "bulma/css/bulma.css";

function FormField(props) {
  return (
    <div>
      <div className="field">
        <label className="label">{props.label}</label>
        <input className="input" type="text" placeholder={props.placeholder}>
          {props.input}
        </input>
      </div>


    </div>
  );
}

export default FormField;
