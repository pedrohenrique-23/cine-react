import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormLogin from "../../components/FormLogin/FormLogin";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  const handleNavigate = () => {
    navigate("/register");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cine React</h1>
      <div className={styles.box}>
        <FormLogin
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleNavigate={handleNavigate}
        />
      </div>
    </div>
  );
};

export default LoginPage;
