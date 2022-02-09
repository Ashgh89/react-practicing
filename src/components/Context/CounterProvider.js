import React, { useContext, useReducer } from "react";
import { useState } from "react/cjs/react.development";

/*export*/ const CounterContext = React.createContext(); // state
/*export*/ const CounterContextDispatcher = React.createContext(); // setState()

const initialState = 0;
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterProvider = ({ children }) => {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={dispatch}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

// So there is cleaner way to write your context hook and manage actions

export const useCount = () => useContext(CounterContext);

// There is no problem with this codes, but i want to write it with useReducer
export const useCountActions = () => {
  // const setCount = useContext(CounterContextDispatcher);
  return useContext(CounterContextDispatcher);

  // const addOne = () => setCount((prevCount) => prevCount + 1);

  // const addFive = () => setCount((prevCount) => prevCount + 5);

  // const decrement = () => setCount((prevCount) => prevCount - 1);

  // return { addOne, addFive, decrement };
};
//NOTICE: In CounterOne function we had state and it returns our actions up there  const { addOne, addFive, decrement } = useCountActions();
// So what if we have so many many actions? there is a good hook to manage them and that's useReducer
// so we comment useState and we use useReducer
