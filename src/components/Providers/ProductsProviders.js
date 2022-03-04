import React, { useContext } from "react";
import { useReducer } from "react/cjs/react.development";
import { productsData } from "../../db/products";
import _, { includes } from "lodash";
/*export*/ const ProductContext = React.createContext(); // state
/*export*/ const ProductContextDispatcher = React.createContext(); // setState()

// 3. NOW CREATE initialSTate and put our useState here (our products)
const initialState = [
  { title: "React.js", price: "90€", id: "1", quantity: "1" },
  { title: "Vue.js", price: "80€", id: "2", quantity: "2" },
  { title: "Angular.js", price: "30€", id: "3", quantity: "3" },
];

// 4. Create reducer function
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "increment": {
      // 1. id=> ok
      // 2. index
      const index = state.findIndex((item) => item.id === action.id);
      // 3. clone the selected index and update the qty
      const product = { ...state[index] };
      product.quantity++;
      // 4. update products
      const updatesProducts = [...state];
      updatesProducts[index] = product;
      return updatesProducts;
    }
    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);

      // 3. clone the selcted index and update the quantity
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filterProducts = state.filter((p) => p.id !== action.id);
        return filterProducts;
      } else {
        // Update products
        const updatesProducts = [...state];
        product.quantity--;
        updatesProducts[index] = product;
        return updatesProducts;
      }
    }
    case "edit": {
      const updatesProducts = [...state];

      const selectedItem = updatesProducts.find((p) => p.id === action.id);

      selectedItem.title = action.event.target.value;
      return updatesProducts;
    }

    case "remove":
      const mySetProducts = state.filter((p) => p.id !== action.id);
      return mySetProducts;

    case "filter":
      console.log(action.selectedOption.value);
      // If we click on All, it give us all of products
      if (action.selectedOption.value === "") {
        return productsData;
      } else {
        const updatedProducts = productsData.filter(
          (p) => p.availableSizes.indexOf(action.selectedOption.value) >= 0
        );
        return updatedProducts;
      }

    // first of all in the Terminal npm i lodash and press enter.
    // after that import that at the top -> import _ from "lodash";
    // now give it here -> _.orderBy(products, ["price", ["asc"]]);
    // Very very very better way 😋
    // NOTICE : DO NOT FORGET THAT WE IMPORT -> import _ from "lodash"; AT THE TOP
    // I CANNOT MAKE A SCREENSHOT, BECAUSE IT IS A LONG PAGE 🙍‍♂️
    case "sort": {
      const value = action.selectedOption.value;
      const products = [...state];
      if (value === "lowest") {
        return _.orderBy(products, ["price"], ["asc"]);
      } else {
        return _.orderBy(products, ["price"], ["desc"]);
      }
    }
    case "search": {
      const value = action.event.target.value;

      if (value === "") {
        return state;
      } else {
        const filteredProducts = productsData.filter((p) =>
          p.title.toLowerCase().includes(value.toLowerCase())
        );
        return filteredProducts;
      }
    }

    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  // 1. NOW LET'S USE useReducer, SO First we comment the useState and create useReducer
  // const [products, setProducts] = useState([
  //   { title: "React.js", price: "90€", id: "1", quantity: "1" },
  //   { title: "Vue.js", price: "80€", id: "2", quantity: "2" },
  //   { title: "Angular.js", price: "30€", id: "3", quantity: "3" },
  // ]);

  // 2. SO LET'S CREATE useReducer
  const [products, dispatch] = useReducer(reducer, productsData);

  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={/*setProducts*/ dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductContext);

export const useProductsActions = () => {
  // const setProducts = useContext(ProductContextDispatcher);
  return useContext(ProductContextDispatcher);

  // Comment it, we don't need it
  // const products = useContext(ProductContext);

  // const removeHandler = (goalId) => {
  //   console.log("Removed", goalId);
  //   const mySetProducts = products.filter((p) => p.id !== goalId);
  //   setProducts(mySetProducts);
  //   //ODER
  //   // setProducts(products.filter((p) => p.id !== goalId));
  // };

  // const addHandler = (goalId) => {
  //   console.log("Increment", goalId);
  //   // ENTWEDER--------------------
  //   // const myProducts = [...products];
  //   // const selectedItem = myProducts.find((p) => p.id === goalId);
  //   // selectedItem.quantity++;
  //   // setProducts(myProducts);
  //   //ODER-------------------------
  //   // 1. id=> ok
  //   // 2. index
  //   // const index = products.findIndex((item) => item.goalId === goalId);
  //   // // 3. clone the selected index and update the qty
  //   // const product = { ...products[index] };
  //   // product.quantity++;
  //   // // 4. update products
  //   // const updatesProducts = [...products];
  //   // updatesProducts[index] = product;
  //   // setProducts(updatesProducts);
  // };

  // const minusHandler = (id) => {
  //   // 1. id => ok
  //   // 2. index
  //   const index = products.findIndex((item) => item.id === id);
  //   console.log(index);

  //   // 3. clone the selcted index and update the quantity
  //   const product = { ...products[index] };
  //   if (product.quantity === 1) {
  //     const filterProducts = products.filter((p) => p.id !== id);
  //     setProducts(filterProducts);
  //   } else {
  //     // Update products
  //     const updatesProducts = [...products];
  //     product.quantity--;
  //     updatesProducts[index] = product;
  //     setProducts(updatesProducts);
  //   }
  // };

  // const changeHandler = (event, id) => {
  //   console.log(event.target.value, id);
  //   const myProducts = [...products];

  //   const selectedItem = myProducts.find((p) => p.id === id);
  //   selectedItem.title = event.target.value;
  //   setProducts(myProducts);

  //   //ODER--------------------
  //   // id => ok
  //   // 2. index
  //   const index = myProducts.findIndex((p) => p.id === id);
  //   console.log(index);
  //   // 3. clone the selcted index and update the quantity
  //   const product = { ...products[index] };
  //   product.title = event.target.value;
  //   // update products
  //   const updatedProducts = [...products];
  //   updatedProducts[index] = product;
  //   setProducts(updatedProducts);
  // };

  // return { removeHandler, addHandler, changeHandler, minusHandler };
};
