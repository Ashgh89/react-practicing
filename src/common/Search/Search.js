import { useState } from "react";
import styles from "./search.module.css";
import { useProductsActions } from "../../components/Providers/ProductsProviders";

const Search = () => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    dispatch({ type: "search", event: e });
    setValue(e.target.value);
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
