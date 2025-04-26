// src/pages/Register/RegisterPage.jsx
import React from "react";
import FormRegister from "../../components/FormRegister/FormRegister";
import styles from './RegisterPage.module.css';
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = (formData) => {
    console.log("Register Data:", formData);
    // Aqui futuramente vai sua lógica de validação ou API
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cine React</h1>
      <div className={styles.box}>
        <FormRegister handleRegister={handleRegister} />
      </div>
    </div>
  );
};

export default RegisterPage;
