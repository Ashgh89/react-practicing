import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";

/*export*/ const ProductContext = React.createContext(); // state
/*export*/ const ProductContextDispatcher = React.createContext(); // setState()

// 3. NOW CREATE initialSTate
const initialState = [
  { title: "React.js", price: "90€", id: "1", quantity: "1" },
  { title: "Vue.js", price: "80€", id: "2", quantity: "2" },
  { title: "Angular.js", price: "30€", id: "3", quantity: "3" },
];

const ProductsProvider = ({ children }) => {
  // 1. NOW LET'S USE useReducer, SO First we comment the useState and create useReducer
  // const [products, setProducts] = useState([
  //   { title: "React.js", price: "90€", id: "1", quantity: "1" },
  //   { title: "Vue.js", price: "80€", id: "2", quantity: "2" },
  //   { title: "Angular.js", price: "30€", id: "3", quantity: "3" },
  // ]);

  // 2. SO LET'S CREATE useReducer
  const [products, setProducts] = useReducer(reducer, initialState);

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

export const useProductsActions = () => {
  const setProducts = useContext(ProductContextDispatcher);
  const products = useContext(ProductContext);

  const removeHandler = (goalId) => {
    console.log("Removed", goalId);
    const mySetProducts = products.filter((p) => p.id !== goalId);
    setProducts(mySetProducts);
    //ODER
    // setProducts(products.filter((p) => p.id !== goalId));
  };

  const addHandler = (goalId) => {
    console.log("Increment", goalId);
    // 1. id => done ✔
    // 2. find selected items
    // 3. add one to item quantity
    // 4. setState()
    const myProducts = [...products];
    const selectedItem = myProducts.find((p) => p.id === goalId);
    selectedItem.quantity++;
    setProducts(myProducts);
    // const index = products.findIndex((item) => item.goalId !== goalId);
    // const product = { ...products[index] };
    // product.quantity++;
    // setProducts(product);
  };

  const minusHandler = (id) => {
    // 1. id => ok
    // 2. index
    const index = products.findIndex((item) => item.id === id);
    console.log(index);

    // 3. clone the selcted index and update the quantity
    const product = { ...products[index] };
    if (product.quantity === 1) {
      const filterProducts = products.filter((p) => p.id !== id);
      setProducts(filterProducts);
    } else {
      // Update products
      const products1 = [...products];
      product.quantity--;
      products1[index] = product;
      setProducts(products1);
    }
  };

  const changeHandler = (event, id) => {
    console.log(event.target.value, id);
    const myProducts = [...products];

    const selectedItem = myProducts.find((p) => p.id === id);
    selectedItem.title = event.target.value;
    setProducts(myProducts);
  };

  return { removeHandler, addHandler, changeHandler, minusHandler };
};
