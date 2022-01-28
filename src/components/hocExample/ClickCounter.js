// import { useState } from "react";
import withCount from "../hoc/withCount";

const ClickCounter = ({ count, incrementCount, name }) => {
  // Destructuring (props)
  // const [count, setCount] = useState(0);
  // const incrementCount = () => {
  //   setCount(count + 1);
  // };

  console.log(name); // Just to make sure that our props in App.js is found
  return (
    <div>
      <h2 onClick={incrementCount}>clicked {count} times</h2>
    </div>
  );
};

export default withCount(ClickCounter, 5);

//NOTICE WE CANT CODE LIKE THAT, BECAUSE IN BIG PROJECTS
// WE CANNOT CREATE MANY ClickCounter.js or HoverCounter.js
// SO LET'S FIND HOW TO SOLVE IT (Next Page)
