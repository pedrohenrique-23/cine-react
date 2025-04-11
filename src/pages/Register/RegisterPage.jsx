import React from "react";
import FormRegister from "../../components/FormRegister/FormRegister";
import styles from './RegisterPage.module.css'

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cine React</h1>
      <div className={styles.box}>
        <FormRegister />
      </div>
    </div>
  );
};

export default RegisterPage;
