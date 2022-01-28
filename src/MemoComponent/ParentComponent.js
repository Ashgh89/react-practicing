import { useState, useEffect } from "react";
// import { useEffect } from "react/cjs/react.development";
import MemoCom from "./MemoCom";

const ParentComponent = () => {
  const [name, setName] = useState("Ash");

  useEffect(() => {
    setInterval(() => {
      console.log("update");
      setName("Ash");
    }, 1000);
  });

  return (
    <div>
      parent component
      <MemoCom name={name}></MemoCom>
    </div>
  );
};

export default ParentComponent;
