import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const MyTest = () => {
  const [resourceType, setResourceType] = useState("post");

  useEffect(() => {
    console.log("It is Updating");
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("post")}>post</button>
        <button onClick={() => setResourceType("users")}>user</button>
        <button onClick={() => setResourceType("comment")}>comment</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
};

export default MyTest;
