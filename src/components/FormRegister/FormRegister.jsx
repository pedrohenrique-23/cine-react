// import React from 'react'
// import Input from '../Input/Input'

// const FormRegister = () => {
//   return (
//     <form action="">
//         <h2>Crie sua conta</h2>
//         <Input
//         label="E-mail"
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Digite seu e-mail"
//       />
//       <Input
//         label="E-mail"
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Digite seu e-mail"
//       />
//       <Input
//         label="E-mail"
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Digite seu e-mail"
//       />
//       <Input
//         label="E-mail"
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Digite seu e-mail"
//       />
//     </form>
//   )
// }

// export default FormRegister

// src/components/FormRegister/FormRegister.jsx
import { useState } from "react";
import styles from "./FormRegister.module.css";
import Input from "../Input/Input";
import { registerSchema } from "../../schemas/registerSchema";


const FormRegister = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    try {
      registerSchema.parse(formData); // Validação com Zod
      console.log("Dados válidos:", formData);
      // Aqui entraria a lógica de cadastro (ex: Firebase)
    } catch (error) {
      if (error.errors) {
        alert(error.errors[0].message); // Exibe a primeira mensagem de erro
      }
    }
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
      <button className="btn disabled">Entrar</button>
    </form>
  );
};

export default FormRegister;
