// import React from "react";
// import styles from './Input.module.css';

// const Input = ({ label, type, name, value, onChange, placeholder, error }) => {
//   return (
//     <div className={styles.container}>
//       {label && <label htmlFor={name}>{label}</label>}
//       <input
//         id={name}
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className={styles.input}
//       />
//       {error && <div className={styles.error}>{error}</div>} {/* Exibindo o erro diretamente abaixo do campo */}
//     </div>
//   );
// };

// export default Input;

// Usando o React Hook Form:

import React from "react";
import styles from "./Input.module.css";

// Habilita ref para uso com react-hook-form
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
