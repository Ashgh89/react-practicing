import { useProducts } from "../Providers/ProductsProviders";
import styles from "./navBar.module.css";

const NavBar = (/*{ totalItem }*/) => {
  const products = useProducts();
  const totalItem = products.filter((p) => p.quantity > 0).length;
  return (
    <header className={styles.navBar}>
      <h2>fronthooks.de shopping</h2>
      <span>{totalItem}</span>
    </header>
  );
};

export default NavBar;
