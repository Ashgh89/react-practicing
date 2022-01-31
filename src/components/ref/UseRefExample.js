import { useState, useRef, useEffect } from "react";

// Now another use of useRef -> //  Store the value of previous state

const UseRefExample = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const previousValue = useRef();
  const previousCount = useRef();

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  console.log("re-render", inputValue);
  console.log("prev-render", previousValue.current); // It is always undefine unless we put it in useEffect to update it

  useEffect(() => {
    previousValue.current = inputValue; // ref does not re-render component, just render itself when inputValue changes
    console.log("useEffect", previousValue.current);
  }, [inputValue]);

  useEffect(() => {
    previousCount.current = count;
    // console.log("useEffect", previousValue.current);
  }, [count]);
  // If we press (a) before useEffect, we render this return at first
  // So in return we have (inputValue = a)
  // And previousValue.current has still its first value and it is not changed and is still undefined
  // because we still didn't render useEffect to update previousValue.current
  // So when return rendred, we render now useEffect but it is too late to show (a) in UI
  // if you see in console we have useEffect a but in UI we don't have it, because this return rendred firstly
  return (
    <div>
      <input type="text" value={inputValue} onChange={changeHandler} />
      <p>
        my name is {inputValue} and it used to be {previousValue.current}
      </p>
      <div>
        <button onClick={() => setCount(Math.ceil(Math.random() * 100))}>
          generate random
        </button>
        <div>count is {count}</div>
        <div>Previous count is {previousCount.current}</div>
      </div>
    </div>
  );
};
//NOTICE So all these previousValues are because ref does not re-render the component
// That's why it remains and it show us the previous value and it is a good trick that
// use ref in useEffect, so it will render for the second render and so on

export default UseRefExample;
