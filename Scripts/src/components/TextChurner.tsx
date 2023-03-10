import * as React from "react";
import { useState, useEffect } from 'react';
import NumberInput from './EmissionInput'

/**
 * A class for simply creating that one spaghetti paragraph
 */
function TextChurner(props = {emissionProbability: {}}) {

  const [emissionProbabilityText, setEmissionProbabilityText] = useState('');

  document.addEventListener('onUpdateEmissionInput', () => {
    setEmissionProbabilityText(getEmissionProbabilityText());
  });

  const getEmissionProbabilityText = () => {
    let emissionProbabilityText = '';

    Object.entries(props.emissionProbability).map(probabilityMaps => {
      emissionProbabilityText += 'The probability of ' + probabilityMaps[0] + ' weather while ' +
      Object.entries(probabilityMaps).map(probabilityMap => {
        if (typeof probabilityMap[1] == 'object') {
          var text = '';
          Object.entries(probabilityMap[1]).map(probability => (
            text += probability[0] + 'ing was ' + probability[1] + ', while '
          ));
          return text.substring(0, text.length - 8) + '. ';
        }
      }).join(' ');
    });

    return emissionProbabilityText;
  }
  
  return (
    <p>
      {emissionProbabilityText}
    </p>);
}

export default TextChurner;