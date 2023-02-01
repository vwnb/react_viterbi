import * as React from "react";
import { useState, useEffect } from 'react';
import NumberInput from "./NumberInput";

function Controls(props) {

  const [state, setState] = useState(props.input);
  const [emissionProbability, setEmissionProbability] = useState(props.input.emission_probability);
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(display === true ? false : true);
  };

  return (
    <div>
      <p className="toggle"><button onClick={() => toggleDisplay()}>Toggle controls</button></p>
      <div className={display ? "controls visible" : "controls"}>
          <NumberInput weather="rainy" observation="clean" value={emissionProbability.rainy.clean} />
          <NumberInput weather="rainy" observation="walk"  value={emissionProbability.rainy.walk} />
          <NumberInput weather="rainy" observation="shopp" value={emissionProbability.rainy.shopp} />
          <NumberInput weather="rainy" observation="sleep" value={emissionProbability.rainy.sleep} />
          <NumberInput weather="sunny" observation="clean" value={emissionProbability.sunny.clean} />
          <NumberInput weather="sunny" observation="walk" value={emissionProbability.sunny.walk} />
          <NumberInput weather="sunny" observation="shopp" value={emissionProbability.sunny.shopp} />
          <NumberInput weather="sunny" observation="sleep" value={emissionProbability.sunny.sleep} />
      </div>
    </div>
  );

}

export default Controls;