import React from "react";

const MemoCom = (props) => {
  console.log("Memo Component");
  return <div>memo component - {props.name}</div>;
};

export default React.memo(MemoCom);
