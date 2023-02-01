import * as React from "react";
import { useState, useEffect } from 'react';

function NumberInput(props) {

  const [itemState, setItemState] = useState(props.value);

  const addToValue = (value) => {
    value = Math.round((value + 0.1) * 10) / 10;
    document.dispatchEvent(new CustomEvent('onUpdateNumberInput', {
      detail: {
        value:       value,
        weather:     props.weather,
        observation: props.observation
      }
    }));
    setItemState(value);
  };

  const subtractFromValue = (value) => {
    value = Math.round((value - 0.1) * 10) / 10;
    document.dispatchEvent(new CustomEvent('onUpdateNumberInput', {
      detail: {
        value:       value,
        weather:     props.weather,
        observation: props.observation
      }
    }));
    setItemState(value);
  };

  useEffect(() => {
    console.log(itemState)
  },[itemState]);

  return (
    <p>
      <button defaultValue={itemState} onClick={() => {addToValue(itemState)}}>+</button>&nbsp;
      <button defaultValue={itemState} onClick={() => {subtractFromValue(itemState)}}>-</button>&nbsp;
      P of {props.weather} while {props.observation}ing: {itemState}
    </p>
  );
}

export default NumberInput;