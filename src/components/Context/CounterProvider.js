import React from "react";
import { useState } from "react/cjs/react.development";

export const CounterContext = React.createContext();
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={count}>{children}</CounterContext.Provider>
  );
};

export default CounterProvider;
