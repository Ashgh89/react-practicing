// import React from "react";
import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
import FunctionalCounter from "./components/FunctionalCounter";
import FunctionalTimer from "./components/FunctionalTimer";
import MyTest from "./components/ProductList/MyTest";
import Wrapper from "./components/hoc/Wrapper";
import ClickCounter from "./components/hocExample/ClickCounter";
import HoverCounter from "./components/hocExample/HoverCounter";
import ParentComponent from "./MemoComponent/ParentComponent";
import FunctionalRef from "./components/ref/FunctionalRef";
import UseRefExample from "./components/ref/UseRefExample";
import CounterProvider from "./components/Context/CounterProvider";
import CounterOne from "./components/Context/CounterOne";
import CountReducer from "./components/Reducer/CountReducer";

export const UserContext = React.createContext();

const App = () => {
  const [products, setProducts] = useState([
    { title: "React.js", price: "90€", id: "1", quantity: "1" },
    { title: "Vue.js", price: "80€", id: "2", quantity: "2" },
    { title: "Angular.js", price: "30€", id: "3", quantity: "3" },
  ]);

  // We bring our events to App components and delete them from ProductsList component.
  // And all of these things is because of NavBar component.
  // Because NavBar needs products as well and it can't take it from its sibling (ProductList)
  // So we must bring products and all events here to parent component (App component), so NavBar and ProductList can use it together.
  // And with props can ProductList give products to its child component(Product)
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
  };

  const deleteItemHandler = (goalId2) => {
    setProducts((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId2);
      return updatedGoals;
    });
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

  return (
    <>
      <CounterProvider>
        <p>Welcome to counter</p>
        {/* <CounterOne /> */}
        <CountReducer />
      </CounterProvider>
      {/* <UserContext.Provider value={"First useContext example"}>
        <ProductList
          products={products}
          onRemove={removeHandler}
          onIncrement={addHandler}
          onChange={changeHandler}
          onDecrement={minusHandler}
        />
      </UserContext.Provider> */}
      {/* <ClickCounter name="Ash Ghanei" />
      <HoverCounter />
      <UseRefExample /> */}
    </>

    // <div className="container">
    //   <h1>My List</h1>
    //   <NavBar totalItem={products.filter((p) => p.quantity > 0).length} />
    //   <ProductList
    //     products={products}
    //     onRemove={removeHandler}
    //     onIncrement={addHandler}
    //     onChange={changeHandler}
    //     onDecrement={minusHandler}
    //   />
    //   <button onClick={() => countHandler(200)}>Add Item: {count}</button>{" "}
    // </div>
  );
};

export default Wrapper(App, "container");
