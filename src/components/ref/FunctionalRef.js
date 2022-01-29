// 1. useRef() => DOM access (like getElementbyId in JavaScript)
// 2. Store the value of previous state

import { useRef } from "react";
import { useEffect } from "react/cjs/react.development";

const FunctionalRef = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return <input type="text" ref={inputRef} />;
};

export default FunctionalRef;
// So when our page starts, our input is focused
// so it is ready to type.
