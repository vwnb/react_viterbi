import * as React from "react";
import { useState, useEffect } from "react";
import EmissionInput from "./EmissionInput";
import TransitionInput from "./TransitionInput";
import TextInput from "./TextInput";

function Controls(props) {

  const [emissionProbability, setEmissionProbability] = useState(props.input.emission_probability);
  const [transitionProbability, setTransitionProbability] = useState(props.input.transition_probability);
  const [observations, setObservations] = useState(props.input.observations);

  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(display === true ? false : true);
  };

  return (
    <div>
      <p className="toggle"><button onClick={() => toggleDisplay()}>Toggle <br/> controls</button></p>
      <div className={display ? "controls visible" : "controls"}>
        <h3>Emission probabilities</h3>
        <EmissionInput weather="rainy" observation="clean" value={emissionProbability.rainy.clean} />
        <EmissionInput weather="rainy" observation="walk"  value={emissionProbability.rainy.walk} />
        <EmissionInput weather="rainy" observation="shopp" value={emissionProbability.rainy.shopp} />
        <EmissionInput weather="rainy" observation="sleep" value={emissionProbability.rainy.sleep} />
        <EmissionInput weather="sunny" observation="clean" value={emissionProbability.sunny.clean} />
        <EmissionInput weather="sunny" observation="walk" value={emissionProbability.sunny.walk} />
        <EmissionInput weather="sunny" observation="shopp" value={emissionProbability.sunny.shopp} />
        <EmissionInput weather="sunny" observation="sleep" value={emissionProbability.sunny.sleep} />
        <h3>Transition probabilities</h3>
        <TransitionInput from="sunny" to="rainy" value={transitionProbability.sunny.rainy} />
        <TransitionInput from="sunny" to="sunny" value={transitionProbability.sunny.sunny} />
        <TransitionInput from="rainy" to="rainy" value={transitionProbability.rainy.rainy} />
        <TransitionInput from="rainy" to="sunny" value={transitionProbability.rainy.sunny} />
        <h3>Your diary</h3>
        <TextInput value={observations} />
      </div>
    </div>
  );

}

export default Controls;