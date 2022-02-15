import styles from "./product.module.css";
import { useContext, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { useEffect } from "react";
import { UserContext } from "../../App";

const Product = ({
  changingType,
  onDecrement,
  onIncrement,
  product,
  onDelete,
}) => {
  const [userName, setUsername] = useState("");

  // Component did mount (CDM) + Component did update (CDU) + Component will unmout (CWUM) => Alles of einmal in useEffect()
  useEffect(() => {
    console.log("product.js useEffect");
    // Clean-Up => timer, interval, ...
    // This Clean-Up function only render when we delete elements, because it is (CWUN)
    return () => {
      console.log("Product CWUM");
    };
    // [] Empty array => (CDM), so just one time rendered at very first time
    // if [] is not empty, for example [count], it means this useEffect will only render very first time and when [count] is changing.
    // without [] it render everytime when we click or type
  }, []);

  const changeHandler = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div className={styles.product}>
      {/* <input type="text" onChange={changeHandler} value={userName} /> */}
      <p>Product Name: {product.title} </p>
      <p>Price: {product.price}</p>
      <span className={styles.value}>{product.quantity}</span>
      <input type="text" onChange={changingType} value={product.title} />
      <button
        onClick={onIncrement}
        className={`${styles.button} ${styles.inc}`}
      >
        +
      </button>
      <button
        onClick={onDecrement}
        className={`${styles.button} ${styles.inc} ${
          product.quantity === 1 ? styles.remove : null
          //ODER props.product.quantity===1 && styles.remove -> BETTER WAY
        }`}
        //NOTICE 7. Here -> {props.product.quantity > 1 ? "-" : <BiTrash />}
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Product;
