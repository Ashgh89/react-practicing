// import React from "react";
import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/hoc/Wrapper";
import ProductsProvider from "./components/Providers/ProductsProviders";
import Filter from "./components/Filter/Filter";
import Search from "./common/Search/Search";

//NOTICE As you see there is much less code in App.js and it's cleaner

const App = () => {
  return (
    <>
      <ProductsProvider>
        <NavBar /*totalItem={products.filter((p) => p.quantity > 0).length}*/ />
        <Search />
        <Filter />
        <ProductList />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "container");
