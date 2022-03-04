import styles from "./folter.module.css";
import Select from "react-select";

const FilterComponents = ({ value, onChange, sortOptions, title }) => {
  return (
    <div className={styles.selectContainer}>
      <span>{title}</span>
      <Select
        value={value}
        onChange={onChange}
        options={sortOptions}
        className={styles.select}
      />
    </div>
  );
};

export default FilterComponents;
