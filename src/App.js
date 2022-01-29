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

// In this section we bring our products here to App component and we delete it from ProjectList component

const App = () => {
  const [products, setProducts] = useState([
    { title: "React.js", price: "90€", id: "1", quantity: "1" },
    { title: "Vue.js", price: "80€", id: "2", quantity: "2" },
    { title: "Angular.js", price: "30€", id: "3", quantity: "3" },
  ]);

  const [isShow, setIsShow] = useState(true);

  const [count, setCount] = useState(0);

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

    // const myProducts = [...products];
    // const selectedItem = myProducts.find((p) => p.id === id);
    // if (selectedItem.quantity === 1) {
    //   const filterProducts = myProducts.filter((p) => p.id !== id);
    //   setProducts(filterProducts);
    // } else {
    //   selectedItem.quantity--;
    //   setProducts(myProducts);
    // }
  };

  const changeHandler = (event, id) => {
    console.log(event.target.value, id);
    const myProducts = [...products];

    const selectedItem = myProducts.find((p) => p.id === id);
    selectedItem.title = event.target.value;
    setProducts(myProducts);
  };

  const clickHandler = (myName) => {
    setProducts([
      { title: "React.js", price: "980€" },
      { title: myName, price: "880€" },
      { title: "Angular.js", price: "380€" },
    ]);
  };

  const countHandler = (id) => {
    console.log("clicked", id);
    setCount((prevCount) => prevCount + 1);
  };

  // const [isShow, setIsShow]=useState(true); We have it in this page (Upon)
  return (
    // If we add props here, e.g (name="Ash"), we must
    // give to our withCount.js, {...props}
    <>
      <ClickCounter name="Ash Ghanei" />
      <HoverCounter />
      {/* <ParentComponent /> */}
      {/* <FunctionalRef /> */}
      <UseRefExample />
      {/* <FunctionalCounter></FunctionalCounter> */}
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
