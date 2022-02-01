// import { useContext } from "react";
import { useCount, useCountActions } from "./CounterProvider";

const CounterOne = () => {
  // const count = useContext(CounterContext); // state
  // const setCount = useContext(CounterContextDispatcher); // setState()
  const count = useCount();
  const setCount = useCountActions();

  return (
    <div>
      <h1> count is : {count}</h1>
      <button onClick={() => setCount(count + 1)}>add one</button>
    </div>
  );
};

export default CounterOne;
