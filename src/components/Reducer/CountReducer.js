import { useReducer } from "react";

// Now if we give value in return -> <button onClick={() => dispatch({ type: "add", value: 1 })}> that means,
// we can easily add another button for example -> <button onClick={() => dispatch({ type: "add", value: 5 })}>
const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
// NOTICE So what did we do in this section? we made our action to object, so now our action has type and value
// beside, our state is an object
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "add":
      // ...state -> firstly take a clone and after that override your state
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "add2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
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
      <h2>count one is {count.firstCounter}</h2>
      <h2>count two is {count.secondCounter}</h2>
      <div>
        <button onClick={() => dispatch({ type: "add", value: 1 })}>
          add one
        </button>
        <button onClick={() => dispatch({ type: "add", value: 5 })}>
          add five
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          decrement
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "add2", value: 1 })}>
          add one
        </button>
        <button onClick={() => dispatch({ type: "add2", value: 5 })}>
          add five
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          decrement
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};
export default CountReducer;
