// import { useState } from "react";
import withCount from "../hoc/withCount";

const HoverCounter = ({ count, incrementCount }) => {
  // const [count, setCount] = useState(0);
  // const incrementCount = () => {
  //   setCount(count + 1);
  // };

  return (
    <div>
      <h2 onMouseOver={incrementCount}>hovered {count} times</h2>
    </div>
  );
};

export default withCount(HoverCounter, 10);
