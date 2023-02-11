import * as React from "react";
import { useState } from "react";

const TextInput = (props: { value: Array<string> }) => {

  const [itemState, setItemState] = useState(props.value);

  const dispatchUpdate = () => {
    document.dispatchEvent(new CustomEvent("onUpdateTextInput", {
      detail: {
        value: itemState,
      }
    }));
  }

  /**
   * Don't reload page
   */
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleUpdate = (event) => {
    itemState[event.target.getAttribute("name")] = event.target.value;
    dispatchUpdate();
  }

  const pushValue = () => {
    itemState.push("sleep");
    dispatchUpdate();
  }

  const popValue = () => {
    if(itemState.length >= 3){
      itemState.pop();
      dispatchUpdate();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button onClick={() => pushValue()}>+</button>&nbsp;
      <button onClick={() => popValue()}>-</button>&nbsp;
      {itemState.map((item, index) =>
        <span key={index}>
          <select onSelect={handleUpdate} defaultValue={item}>
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