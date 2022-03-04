import { useState } from "react";
import styles from "./search.module.css";
import { useProductsActions } from "../../components/Providers/ProductsProviders";

const Search = ({ filter }) => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    // IT SAYS WHEN YOU SEARCHING, MAKE FILTER ACTION AS WELL
    dispatch({ type: "filter", selectedOption: filter });
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
