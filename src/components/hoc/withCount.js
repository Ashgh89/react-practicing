// use (with) for the name of your component if u want to use hoc
import { useState } from "react";

const withCount = (WrappedComponent, incrementValue) => {
  //   return () => {
  //       // NOTICE We can't use HOOKS in callback function SO Look down
  //     const [count, setCount] = useState(0);
  //     const incrementCount = () => {
  //       setCount(count + 1);
  //     };
  //     // ... count, increment, ...
  //     return <WrappedComponent />;
  //   };
  const UpdateComponent = (props) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      // setCount(count + 1);
      setCount(count + incrementValue);
    };
    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };
  return UpdateComponent;
};

export default withCount;
