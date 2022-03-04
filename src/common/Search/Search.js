import { useState } from "react";
import styles from "./search.module.css";

const Search = () => {
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className={styles.formControl}>
      <div> search for: </div>
      <input
        type="text"
        placeholder="search for ..."
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default Search;
