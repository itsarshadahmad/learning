/*

useReducer Hook:

The useReducer Hook is used to store and update states, just like the useState Hook.
It allows for custom state logic. It accepts a reducer function as its first 
parameter and the initial state as the second which generally will contain an 
object. The useReducer Hook returns the current state and a dispatch method.

If you find yourself keeping track of multiple pieces of state that rely on complex 
logic, useReducer may be useful.

*/

import { useReducer } from 'react'

// handle reducer state
function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        default:
            return state
    }
}

export default function Reducer() {

    // return state and dispatch function which can be used to work with 
    // reducer function and which has initial state value.
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    function onIncrement() { dispatch({ type: "increment" }) }
    function onDecrement() { dispatch({ type: "decrement" }) }

    return (
        <div>
            <button onClick={onIncrement}>+</button>
            <h1>{state.count}</h1>
            <button onClick={onDecrement}>-</button>
        </div>
    )
}
