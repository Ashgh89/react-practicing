import { useState } from "react";
import { useProductsActions } from "../Providers/ProductsProviders";

const Filter = () => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState("");

  //NOTICE e is the event, which in this case is change , target is the element that triggered the event,
  // which in this case is the input , and value is the value of the input element.
  const changeHandler = (e) => {
    dispatch({ type: "filter", event: e });
    setValue(e.target.value);
  };
  return (
    <div>
      <p>filter products based on:</p>
      <div>
        order by
        <select onChange={changeHandler} value={value}>
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
