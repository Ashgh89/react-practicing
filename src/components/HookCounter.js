import { useState } from "react/cjs/react.development";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  const addOneHandler = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const addTwoHandler = () => {
    // setCount(count + 2);
    setCount((prevCount) => prevCount + 2);
  };

  const addFiveHandler = () => {
    // setCount(count + 5);
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }
  };
  // Update STATE based on the previous STATE => Callback Function.
  return (
    <div>
      <h1>count - {count}</h1>
      <button onClick={addOneHandler}>Add One</button>
      <button onClick={addTwoHandler}>Add Two</button>
      <button onClick={addFiveHandler}>Add Five</button>
    </div>
  );
};
export default HookCounter;
