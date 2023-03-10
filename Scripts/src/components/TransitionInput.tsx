import * as React from "react";
import { useState, useEffect } from 'react';

const TransitionInput = (props: { value: number, from: string, to: string}) => {

  const [itemState, setItemState] = useState(props.value);

  /**
   * @param value number
   */
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
    document.dispatchEvent(new CustomEvent('onUpdateTransitionInput', {
      detail: {
        value: itemState,
        from:  props.from,
        to:    props.to
      }
    }));
  }, [itemState]);

  return (
    <p>
      <button defaultValue={itemState} onClick={() => {addToValue(itemState)}}>+</button>&nbsp;
      <button defaultValue={itemState} onClick={() => {subtractFromValue(itemState)}}>-</button>&nbsp;
      P of {props.to} after {props.from}: {itemState}
    </p>
  );
}

export default TransitionInput;