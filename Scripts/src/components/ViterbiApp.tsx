import * as React from "react";
import { useState, useEffect } from 'react';
import TextChurner from "./TextChurner";
import Controls from "./Controls";
import Viterbi from "./Viterbi";

function ViterbiApp(props) {

  const [state, setState] = useState(props.state);

  document.addEventListener('onUpdateTransitionInput', (e) => {
    console.log(e.detail);
    state.input.transition_probability[e.detail.from][e.detail.to] = e.detail.value;
    setState(Viterbi(state));
  });

  document.addEventListener('onUpdateEmissionInput', (e) => {
    state.input.emission_probability[e.detail.weather][e.detail.observation] = e.detail.value;
    setState(Viterbi(state));
  });

  document.addEventListener('onUpdateTextInput', (e) => {
    state.input.observations = e.detail.value;
    setState(Viterbi(state));
  });

  return (
    <div>
      <div className="poem">
        <p>Your day consisted of {state.input.observations.join('ing, ')}ing.</p> 
        {state.output.map(state => (
            <p key={state.key}>While {state.observation}ing, it was {state.name === 'sunny' ? state.name + ". 🌞" : state.name + ". 🌧️"}</p>
        ))}
        <TextChurner emissionProbability={state.input.emission_probability} />
        <h3>What?</h3>
        <p>This is a demonstration of "hidden states" revealed by a Javascript implementation of the <a href="https://en.wikipedia.org/wiki/Viterbi_algorithm">Viterbi algorithm.</a></p>
        <h3>Insights</h3>
        <p>Setting the emission probabilities to extremes like 0.1 and 0.9 has a less extreme effect than setting them around 0.2 steps away from each other. This is useful when modeling a very sunny or very rainy weather.</p>
        <p>The <a href="https://en.wikipedia.org/wiki/Hidden_Markov_model">Hidden Markov Models</a> act in mysterious ways but the algorithm is pure! Same input, same output.</p>
     </div>
      <Controls input={state.input} />
    </div>
  );
}

export default ViterbiApp;