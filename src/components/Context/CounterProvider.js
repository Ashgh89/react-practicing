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

// So now we must export context always, so there is a good way to not export it

export const useCount = () => useContext(CounterContext);

export const useCountActions = () => useContext(CounterContextDispatcher);
