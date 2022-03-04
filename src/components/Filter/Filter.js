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

// As you see here, we reapet our codes here, so a good way is
// to reuseable our components, now let's start with SelectComponent so our (sort).
// We create new folder and name it Select and create new file a name it FilterComponent
// We can style it as well
// import Select from "react-select";
import { useState } from "react";
import { useProductsActions } from "../Providers/ProductsProviders";
import styles from "./filter.module.css";
import SelectComponent from "../../common/Select/SelectComponent";
import Search from "../../common/Search/Search";
const options = [
  { value: "", label: "All" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];
const Filter = () => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState(""); // filter by size
  const [sort, setSort] = useState(""); // sort by price

  const changeHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    // Because if we select e.g L or S, it should be in price sorted as well
    dispatch({ type: "sort", selectedOption: sort });
    setValue(selectedOption);
  };

  const sortHandler = (selectedOption) => {
    console.log(selectedOption);
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };
  // As you see here, we reapet our codes here, so a good way is
  // to reuseable our components, now let's start with SelectComponent so our (sort and filter).
  // We create new folder and name it Select and create new file a name it SelectComponent
  // We can style it as well
  // Se how are codes is cleaner, WOWWWWWW 😎
  return (
    <section>
      <Search filter={value} />
      <div className={styles.filter}>
        <p>filter products based on:</p>
        <SelectComponent
          title="filter by size"
          value={value}
          onChange={changeHandler}
          options={options}
        />
        <SelectComponent
          title="sort by price"
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
        />
      </div>
    </section>
  );
};

export default Filter;
