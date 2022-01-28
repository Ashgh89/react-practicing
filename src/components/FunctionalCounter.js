import React, { useEffect, useState } from "react";

const FunctionalCounter = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  // Component did mount (CDM) + Component did update (CDU) + Component will unmout (CWUM) => Alles of einmal in useEffect()
  useEffect(() => {
    console.log("document title updating");
    document.title = `clicked: ${count} times`;
    // [] Empty array => (CDM), so just one time rendered at very first time, and clicking and typing doesn't render
    // if [] is not empty, for example [count], it means this useEffect will only render very first time and when [count] is changing, so when clicking
    // without [] it render everytime when we click or type
    // So with these features we prevent of many useless rendering.
  }, [count]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>
    </div>
  );
};

export default FunctionalCounter;
