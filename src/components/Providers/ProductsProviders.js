import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";

/*export*/ const ProductContext = React.createContext(); // state
/*export*/ const ProductContextDispatcher = React.createContext(); // setState()

const initialState = 0;
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { title: "React.js", price: "90€", id: "1", quantity: "1" },
    { title: "Vue.js", price: "80€", id: "2", quantity: "2" },
    { title: "Angular.js", price: "30€", id: "3", quantity: "3" },
  ]);

  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={setProducts}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductContext);

export const useProductsAction = () => useContext(ProductContextDispatcher);
