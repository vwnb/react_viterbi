import * as React from "react";
import { useState, useEffect } from 'react';

const EmissionInput = (props: { value: number, weather: string, observation: string }) => {

  const [itemState, setItemState] = useState(props.value);

  const addToValue = (value: number) => {
    value = Math.round((value + 0.1) * 10) / 10;

    if (value > 0.9) {
      value = 0.9;
    }

    setItemState(value);
  };

  const subtractFromValue = (value: number) => {
    value = Math.round((value - 0.1) * 10) / 10;

    if (value < 0.1) {
      value = 0.1;
    }

    setItemState(value);
  };

  useEffect(() => {
    document.dispatchEvent(new CustomEvent('onUpdateEmissionInput', {
      detail: {
        value:       itemState,
        weather:     props.weather,
        observation: props.observation
      }
    }));
  }, [itemState]);

  return (
    <p>
      <button defaultValue={itemState} onClick={() => {addToValue(itemState)}}>+</button>&nbsp;
      <button defaultValue={itemState} onClick={() => {subtractFromValue(itemState)}}>-</button>&nbsp;
      P of {props.weather} while {props.observation}ing: {itemState}
    </p>
  );
}

export default EmissionInput;