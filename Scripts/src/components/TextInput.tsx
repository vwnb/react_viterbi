import * as React from "react";
import { useState, useEffect } from "react";

function TextInput(props) {

  const [itemState, setItemState] = useState(props.value);

  /**
   * Don't reload page
   */
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  /**
   * Update value
   */
  const handleUpdate = (event) => {
    let value = event.target.value.split(",");

    if (typeof value === "string") {
      value = value.split(",");
    }

    setItemState(value);

    document.dispatchEvent(new CustomEvent("onUpdateTextInput", {
      detail: {
        value: value,
      }
    }));
  }

  return (
    <form onSubmit={handleSubmit} className={props.valid ? "valid" : "invalid"}>
      <textarea value={itemState} onChange={handleUpdate}></textarea>
      {props.valid === false ? <p>Sorry, the value is invalid. Also sorry, the developer didn't provide a hint or such.</p> : ""}
    </form>
  );
}

export default TextInput;