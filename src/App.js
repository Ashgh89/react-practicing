// import React from "react";
import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/hoc/Wrapper";
import ProductsProvider from "./components/Providers/ProductsProviders";

//NOTICE As you see there is much less code in App.js and it's cleaner

const App = () => {
  return (
    <>
      <ProductsProvider>
        <NavBar /*totalItem={products.filter((p) => p.quantity > 0).length}*/ />
        <ProductList />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "container");

//NOTICE IF YOU ARE NOT UNDERSTAND, WATCH VIDEO 63 and 64
