import { useState, useEffect } from "react";
// import { useEffect } from "react/cjs/react.development";
import MemoCom from "./MemoCom";

const ParentComponent = () => {
  const [name, setName] = useState("Ash");
  const [type, setType] = useState("");
  //   const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Update!!😋✔️");
  });

  const write = (e) => {
    setType(e.target.value);
  };

  const change = () => {
    setName("Lena");
  };

  // NOTICE SO here when we type in our inbox by every button clicking,
  // our componenet will re render. So here ParentComponent will re render,
  // but the problem is when a parent component render, its children will
  // render as well, here our MemoCom component is child, so this
  // component will re render when parent render as well and i don't
  // want it. I want when the (name) state changes, our MemoCom render.
  // So we must give our MemoCom componenet this ->
  return (
    <div>
      parent component
      <MemoCom name={name} />
      <input value={type} onChange={write} />
      <h1 onMouseOver={change}>{name}</h1>
    </div>
  );
};

export default ParentComponent;
