import Product from "../Product/Product";
import React, { useState } from "react";

const ProductList = (props) => {
  const { onRemove, onIncrement, onChange, onDecrement, products } = props;
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
            onDelete={() => onRemove(product.id)}
            onIncrement={() => onIncrement(product.id)}
            changingType={(e) => onChange(e, product.id)}
            onDecrement={() => onDecrement(product.id)}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
