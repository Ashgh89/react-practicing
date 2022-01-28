import styles from "./navBar.module.css";

const NavBar = ({ totalItem }) => {
  return (
    <header className={styles.navBar}>
      <h2>fronthooks.de shopping</h2>
      <span>{totalItem}</span>
    </header>
  );
};

export default NavBar;
