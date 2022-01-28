import { useState } from "react";

const HookObjects = () => {
  const [userData, setUserData] = useState({ firstName: "", lastName: "" });

  const firstNameHandler = (e) => {
    setUserData({ ...userData, firstName: e.target.value });
  };

  const lastNameHandler = (e) => {
    setUserData({ ...userData, lastName: e.target.value });
  };
  return (
    <form>
      <input
        type="text"
        value={userData.firstName} // value is ""
        onChange={firstNameHandler}
      ></input>
      <input
        type="text"
        value={userData.lastName}
        onChange={lastNameHandler}
      ></input>
      <h2>my firstName is - {userData.firstName}</h2>
      <h2>my lastName is - {userData.lastName}</h2>
      <div>{JSON.stringify(userData)}</div>
    </form>
  );
};

export default HookObjects;
