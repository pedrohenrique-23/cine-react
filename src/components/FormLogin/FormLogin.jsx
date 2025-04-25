// src/components/FormLogin.js
import { useState } from "react";
import styles from "./FormLogin.module.css"
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    navigate("/register")
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <Input
        label="E-mail"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Digite seu e-mail"
      />
      <Input
        label="Senha"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Digite sua senha"
      />
      <button type="submit" className={`${styles.btn} btn primary`}>Entrar</button>
      <p className="headline-bold">Ainda não possui uma conta?</p>
      <button className="btn disabled" onClick={() => navigate("/register")}>Cadastrar</button>
    </form>
  );
};

export default FormLogin;
