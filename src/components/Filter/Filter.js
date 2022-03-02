// We want to make our code cleaner with react-select
// HOW TO USE react-select
// 1. Google react-select npm (npmjs.com) to copy npm i react-select
// 2. Paste npm i react-select in the terminal and press enter
// 3. Now import Select from 'react-select';
/* 4. Copy the <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      /> and paste it */
// 4. Make an options array object
// 5. delete target in ProductsProviders
// 6. Style it
import Select from "react-select";
import { useState } from "react";
import { useProductsActions } from "../Providers/ProductsProviders";
import styles from "./filter.module.css";
const options = [
  { value: "", label: "All" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];
const Filter = () => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState("");

  const changeHandler = (selectedOption) => {
    dispatch({ type: "filter", event: selectedOption });
    setValue(selectedOption);
  };
  return (
    <div className={styles.filter}>
      <p>filter products based on:</p>
      <div className={styles.selectContainer}>
        <span>order by</span>
        {/* <select onChange={changeHandler} value={value}>
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select> */}
        <Select
          // change selectedOption to value
          value={value}
          // change this.handleChange to changeHandler
          onChange={changeHandler}
          // put your options array object here
          options={options}
          className={styles.select}
        />
      </div>
    </div>
  );
};

export default Filter;
