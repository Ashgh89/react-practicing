import React from "react";
import { useState } from "react/cjs/react.development";

export const CounterContext = React.createContext(); // state
export const CounterContextDispatcher = React.createContext(); // setState()

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

// 1. Firstly we create CounterProvider.js
// 2. Create a context or more and then export it.
// 3. After that provide it <CounterContext.Provider></CounterContext.Provider>
// 4. What's the children there? I want everywhere this CounterProvider component render, everything will render as well as children
// 5. No we make another component e.g (CounterOne.js) and it can be everywhere.
// 6. in CounterOne.js we can now import CounterContext and CounterContextDispatcher
// 7.Now in CounterOne.js we can consume those Context -> const count = useContext(CounterContext); and const setCount = useContext(CounterContextDispatcher);
