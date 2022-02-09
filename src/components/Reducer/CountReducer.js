import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

// NOTICE Now let's use multiple useReducer, and with that we don't need change or switch (up there)
// Because if we use the last method, our actions gonna by by many many codes
// but here we hold our action stable and our state is just a basic number (const initialState = 0;) (not an object)
// and we just add a second useReducer and that'S works well

const CountReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>count one is {count}</h2>
      <div>
        <button onClick={() => dispatch({ type: "add", value: 5 })}>
          add five
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
      <h2>count two is {countTwo}</h2>
      <div>
        <button onClick={() => dispatchTwo({ type: "add", value: 5 })}>
          add five
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>
          decrement
        </button>
        <button onClick={() => dispatchTwo({ type: "reset" })}>reset</button>
      </div>
    </div>
  );
};
export default CountReducer;
