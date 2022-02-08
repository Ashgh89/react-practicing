import { useReducer } from "react";

// Now let's do more complex state and action

const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "addOne":
      return { firstCounter: state.firstCounter + 1 };
    case "decrement":
      return { firstCounter: state.firstCounter - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CountReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>count is {count.firstCounter}</h2>
      <button onClick={() => dispatch({ type: "addOne" })}>add one</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};
export default CountReducer;
