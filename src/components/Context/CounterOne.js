// import { useContext } from "react";
import { useCount, useCountActions } from "./CounterProvider";

const CounterOne = () => {
  // const count = useContext(CounterContext); // state
  // const setCount = useContext(CounterContextDispatcher); // setState()
  const count = useCount();
  // const setCount = useCountActions();

  // Destructuring
  const { addOne, addFive, decrement } = useCountActions();

  return (
    <div>
      <h1> count is : {count}</h1>
      <button onClick={addOne}>add one</button>
      {/* <button onClick={() => setCount(count + 1)}>add one</button> */}

      <button onClick={addFive}>add five</button>
      {/* <button onClick={() => setCount(count + 1)}>add five</button> */}

      <button onClick={decrement}>decrement</button>
      {/* <button onClick={() => setCount(count + 1)}>decrement</button> */}
    </div>
  );
};

export default CounterOne;
