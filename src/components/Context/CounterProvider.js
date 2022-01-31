import React from "react";

export const CounterContext = React.createContext();
const CounterProvider = () => {
  return <CounterContext.Provider></CounterContext.Provider>;
};

export default CounterProvider;
