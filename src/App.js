// import React from "react";
import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/hoc/Wrapper";
import ProductsProvider from "./components/Providers/ProductsProviders";

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
