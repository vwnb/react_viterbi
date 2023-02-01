import * as React from "react";
import { useState, useEffect } from 'react';
import TextChurner from "./TextChurner";
import Controls from "./Controls";
import Viterbi from "./Viterbi";

function ViterbiApp(props) {

  const [state, setState] = useState(props.state);

  document.addEventListener('onUpdateNumberInput', (e) => {
    state.input.emission_probability[e.detail.weather][e.detail.observation] = e.detail.value;
    setState(Viterbi(state));
  });

  return (
    <div>
      <div className="poem">
        <p>Your day consisted of {state.input.observations.join('ing, ')}.</p> 
        {state.output.map(state => (
            <p key={state.key}>While {state.observation}ing, it was {state.name === 'sunny' ? state.name + ". 🌞" : state.name + ". 🌧️"}</p>
        ))}
        <TextChurner emissionProbability={state.input.emission_probability} />
        <p>ℹ️ This is a demonstration of "hidden states" revealed by a Javascript implementation of the <a href="https://en.wikipedia.org/wiki/Viterbi_algorithm">Viterbi algorithm.</a></p>
      </div>
      <Controls input={state.input} />
    </div>
  );
}

export default ViterbiApp;