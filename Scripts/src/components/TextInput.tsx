import * as React from "react";
import { useState, useEffect } from 'react';

function TextInput(props) {

  const [itemState, setItemState] = useState(props.value);

  const updateValue = (value) => {
    if (typeof value === "string") {
      value = value.split(",");
    }

    setItemState(value);
  }

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
    updateValue(event.target.value)
  }

  /**
   * Update visible value and bubble it up but don't reload page
   */
  const handleClick = (event) => {
    updateValue(itemState);

    document.dispatchEvent(new CustomEvent('onUpdateTextInput', {
      detail: {
        value: itemState,
      }
    }));

    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}> 
      <textarea value={itemState} onChange={handleUpdate}></textarea>&nbsp;
      <input type="submit" value="Update" onClick={handleClick} />
    </form>
  );
}

export default TextInput;