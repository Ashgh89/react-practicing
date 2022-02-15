import Product from "../Product/Product";
import React, { useState } from "react";
import {
  useProducts,
  useProductsActions,
} from "../Providers/ProductsProviders";

const ProductList = (props) => {
  // const { onRemove, onIncrement, onChange, onDecrement, products } = props;
  const products = useProducts();
  // 5. NOW COMMENT THIS
  // const { removeHandler, addHandler, changeHandler, minusHandler } =
  //   useProductsActions();

  // 6. NOW ADD THIS
  const dispatch = useProductsActions();
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
            // 7. NOW GIVE YOUR DISPATCH HERE
            onDelete={() =>
              /*removeHandler(product.id)*/ dispatch({
                type: "remove",
                id: product.id,
              })
            }
            onIncrement={() =>
              /*addHandler(product.id)*/ dispatch({
                type: "increment",
                id: product.id,
              })
            }
            changingType={(e) =>
              /*changeHandler(e, product.id)*/ dispatch({
                type: "edit",
                id: product.id,
                event: e,
              })
            }
            onDecrement={() =>
              /*minusHandler(product.id)*/ dispatch({
                type: "decrement",
                id: product.id,
              })
            }
          />
        );
      })}
    </div>
  );
};

export default ProductList;
