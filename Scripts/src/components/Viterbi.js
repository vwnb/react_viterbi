// Viterbi algorithm for finding hidden relationships
function Viterbi(initState) {
    console.log(initState);

    var V = [{}];
    var path = {};

    // Initialize base cases (t == 0)
    for (var i=0;i<initState.input.states.length;i++) {
        var state = initState.input.states[i];
        V[0][state] = initState.input.start_probability[state] * initState.input.emission_probability[state][initState.input.observations[0]];
        path[state] = [state];
    }

    // Run Viterbi for t > 0
    for (var t=1;t<initState.input.observations.length;t++) {
        V.push({});
        var newpath = {};
        
        for(var i=0;i<initState.input.states.length;i++) {
            var state = initState.input.states[i];
            var max = [0,null];

            for(var j=0;j<initState.input.states.length;j++) {
                var state0 = initState.input.states[j];

                // Calculate the probablity
                var calc = V[t-1][state0]
                    * initState.input.transition_probability[state0][state]
                    * initState.input.emission_probability[state][initState.input.observations[t]];
                if(calc > max[0]) max = [calc,state0];
            }

            V[t][state] = max[0];
            newpath[state] = path[max[1]].concat(state);
        }

        path = newpath;
    }

    // Format return value for React
    var resultPath = [];
    path[max[1]].forEach((element, index) => {
        resultPath[index] = {
            key:         initState.input.observations[index]+index,
            observation: initState.input.observations[index],
            name:        path[initState.input.states[0]][index]
        }
    })

    var max = [0, null];

    for (var i=0;i<initState.input.states.length;i++) {
        var state = initState.input.states[i];
        var calc = V[initState.input.observations.length-1][state];
        if(calc > max[0]) max = [calc,state];
    }

    return {
        output: resultPath,
        input: initState.input
    };
}

export default Viterbi;