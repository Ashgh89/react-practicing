import { useState } from "react";
import MemoCom from "./MemoCom";

const ParentComponent = () => {
  const [name, setName] = useState("Ash");

  return (
    <div>
      Parent Component<MemoCom name={name}></MemoCom>
    </div>
  );
};

export default ParentComponent;
