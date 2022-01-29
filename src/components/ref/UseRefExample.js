import { useState, useRef, useEffect } from "react";

// Now another use of useRef -> //  Store the value of previous state

const UseRefExample = () => {
  const [inputValue, setInputValue] = useState("");
  const previousValue = useRef();

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    previousValue.current = inputValue;
  }, [inputValue]);

  return (
    <div>
      <input type="text" value={inputValue} onChange={changeHandler} />
      <p>
        my name is {inputValue} and it used to be {previousValue.current}
      </p>
    </div>
  );
};

export default UseRefExample;
