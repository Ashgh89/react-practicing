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
// 4. What's the children there? I want everywhere this CounterProvider component render, everything will render as well (as children)
// (here <p>Welcome to counter</p> and <CounterOne/> in App.js are the children).
// 5. No we make another component e.g (CounterOne.js) and it can be everywhere.
// 6. in CounterOne.js we can now import CounterContext and CounterContextDispatcher
// 7.Now in CounterOne.js we can consume those Context -> const count = useContext(CounterContext); and const setCount = useContext(CounterContextDispatcher);
// 8. Don't forget to import useContext hook in the CounterOne.js -> import { useContext } from "react";
// 9. As you see we have value={count} in the CounterProvider and that means we have access this value through CounterOne.js
/* The main idea of using the context is to allow your components to access some global data and re-render when that global data is changed.
 * Context solves the props drilling problem: when you have to pass down props from parents to children */
