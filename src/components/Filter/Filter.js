import { useProductsActions } from "../Providers/ProductsProviders";

const Filter = () => {
  const dispatch = useProductsActions();
  return (
    <div>
      <p>filter products based on:</p>
      <div>
        order by
        <select onChange={(e) => dispatch({ type: "filter", event: e })}>
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XLL">XXL</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
