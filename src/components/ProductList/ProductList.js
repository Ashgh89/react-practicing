import Product from "../Product/Product";
import React, { useState } from "react";
import {
  useProducts,
  useProductsActions,
} from "../Providers/ProductsProviders";

const ProductList = (props) => {
  // const { onRemove, onIncrement, onChange, onDecrement, products } = props;
  const products = useProducts();
  const { removeHandler, addHandler, changeHandler, minusHandler } =
    useProductsActions();
  //----------------------------------------------------------------------------------
  // FIRST WAY
  // if (products.length === 0) return <div>There is nothing</div>;

  return (
    <div>
      {!products.length && <div>YUHUUUUUU</div>}
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            onDelete={() => removeHandler(product.id)}
            onIncrement={() => addHandler(product.id)}
            changingType={(e) => changeHandler(e, product.id)}
            onDecrement={() => minusHandler(product.id)}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
