import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef(({ label, type, name, error, ...rest }, ref) => {
  return (
    <div className={styles.container}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        type={type}
        name={name}
        ref={ref}
        className={styles.input}
        {...rest}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
});

export default Input;
