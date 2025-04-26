// src/components/FormRegister/FormRegister.jsx
import { useState } from "react";
import styles from "./FormRegister.module.css";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";

const FormRegister = ({ handleRegister }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Cadastrar</h2>
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
      <Input
        label="Confirmar Senha"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirme sua senha"
      />
      <button type="submit" className={`${styles.btn} btn primary`}>Cadastrar</button>
      <p className="headline-bold">Já possui uma conta?</p>
      <button
        type="button"
        className="btn disabled"
        onClick={() => navigate("/login")}
      >
        Entrar
      </button>
    </form>
  );
};

export default FormRegister;
