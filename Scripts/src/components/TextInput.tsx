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
    itemState[event.target.getAttribute("name")] = event.target.value;

    document.dispatchEvent(new CustomEvent("onUpdateTextInput", {
      detail: {
        value: itemState,
      }
    }));
  }

  return (
    <form onSubmit={handleSubmit} className={props.valid ? "valid" : "invalid"}>
      {itemState.map((item, index) =>
        <span>
          <select onChange={handleUpdate} key={index} defaultValue={item} name={index}>
            <option value="sleep">sleep</option>
            <option value="walk">walk</option>
            <option value="clean">clean</option>
            <option value="shopp">shop</option>
          </select>&nbsp;
        </span>
      )}
    </form>
  );
}

export default TextInput;