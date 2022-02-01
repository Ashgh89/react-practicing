import { useState } from "react";

// NOTICE As you see our codes works well but we are
// writting 3 handler for one STATE and if i have more and more handler
// that is not going to be clean code and there will be many codes there.
// SO what to do? useReducer hook!
// If you want to see how useReducer works, go to the next page.
const CountReducer = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addSix = () => {
    setCount((prevCount) => prevCount + 6);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h2>count is {count}</h2>
      <button onClick={addOne}>add one</button>
      <button onClick={addSix}>add six</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default CountReducer;
