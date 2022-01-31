import { useContext } from "react";
import { CounterContext, CounterContextDispatcher } from "./CounterProvider";

const CounterOne = () => {
  const count = useContext(CounterContext); // state
  const setCount = useContext(CounterContextDispatcher); // setState()

  return (
    <div>
      <h1> count is : {count}</h1>
      <button onClick={() => setCount(count + 1)}>add one</button>
    </div>
  );
};

export default CounterOne;
