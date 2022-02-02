import { useReducer, useState } from "react";
// 5. Now define reducer function and initialState
const initialState = 0;
// 6. reducer function hast 2 parameters => reducer(state,action);
// NOTICE we can write this reducer down there into useReducer(REDUCER (except this reducer we can give this function), initialState)
const reducer = (state, action) => {
  switch (action) {
    case "addOne":
      return state + 1;
    case "addSeven":
      return state + 7;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
// useReducer :
// 1. Very similar to useState, so for state managment
// 2. Reduce

// Steps for useReducer :
// 1. import useReducer() hook
// 2. useReducer(reducer,initialState). first parameter (reducer) is a function
// 3. return : [count,dispatch]
const CountReducer = () => {
  // with useReducer we dont need this useState anymore
  //const [count, setCount] = useState(0);

  // 4. Let's do it
  const [count, dispatch] = useReducer(reducer, initialState);

  // With useReducer we don't need this 3 handlers, because we have them in switch
  //   const addOne = () => {
  //     setCount((prevCount) => prevCount + 1);
  //   };

  //   const addSix = () => {
  //     setCount((prevCount) => prevCount + 6);
  //   };

  //   const decrement = () => {
  //     setCount((prevCount) => prevCount - 1);
  //   };
  return (
    <div>
      <h2>count is {count}</h2>
      <button onClick={() => dispatch("addOne")}>add one</button>
      <button onClick={() => dispatch("addSeven")}>add seven</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};
export default CountReducer;
