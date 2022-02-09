// import { useContext } from "react";
import { useCount, useCountActions } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();

  // Destructuring
  // const { addOne, addFive, decrement } = useCountActions();
  const dispatch = useCountActions();

  return (
    <div>
      <h1> count is : {count}</h1>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        add one
      </button>
      {/* <button onClick={addOne}>add one</button> */}

      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      {/* <button onClick={addFive}>add five</button> */}

      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
      {/* <button onClick={decrement}>decrement</button> */}
    </div>
  );
};

export default CounterOne;
