import * as React from "react";
import { createRoot } from 'react-dom/client';
import Viterbi from "./components/Viterbi";
import ViterbiApp from './components/ViterbiApp';

const container = document.getElementById('app');
const root = createRoot(container);

let initState = {
    input: {
        states: [
            'rainy',
            'sunny'
        ],
        observations: [
            'sleep',
            'walk',
            'shopp',
            'walk',
            'clean',
            'sleep',
            'clean',
            'sleep'
        ],
        start_probability: {
            'rainy': 0.4,
            'sunny': 0.6
        },
        transition_probability: {
            'rainy' : {'rainy': 0.55, 'sunny': 0.45},
            'sunny' : {'rainy': 0.45, 'sunny': 0.55},
        },
        emission_probability: {
            'rainy' : {'walk': 0.1, 'shopp': 0.2, 'clean': 0.2, 'sleep': 0.5},
            'sunny' : {'walk': 0.3, 'shopp': 0.2, 'clean': 0.2, 'sleep': 0.1},
        }
    },
    output: []
}

var state = Viterbi(initState);

root.render(
    <div>
        <ViterbiApp state={state} />
    </div>
);