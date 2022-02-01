import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";

/*export*/ const CounterContext = React.createContext(); // state
/*export*/ const CounterContextDispatcher = React.createContext(); // setState()

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={setCount}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

// So there is cleaner way to write your context hook

export const useCount = () => useContext(CounterContext);

export const useCountActions = () => {
  const setCount = useContext(CounterContextDispatcher);

  const addOne = (prevCount) => prevCount + 1;

  const addFive = (prevCount) => prevCount + 5;

  const decrement = (prevCount) => prevCount - 1;
};
