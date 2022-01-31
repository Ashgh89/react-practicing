import { useContext } from "react";
import { CounterContext } from "./CounterProvider";

const CounterOne = () => {
  const count = useContext(CounterContext);
  return (
    <div>
      <h1> count is : {count}</h1>
    </div>
  );
};

export default CounterOne;
