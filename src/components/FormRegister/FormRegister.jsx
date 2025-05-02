// import { useState } from "react";
// import styles from "./FormRegister.module.css";
// import Input from "../Input/Input";
// import { registerSchema } from "../../schemas/registerSchema";
// import { useNavigate } from "react-router-dom";
// import { z } from "zod";

// const FormRegister = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [confirmPasswordError, setConfirmPasswordError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Resetando os erros antes de validar
//     setEmailError("");
//     setPasswordError("");
//     setConfirmPasswordError("");

//     // Validação com Zod
//     try {
//       registerSchema.parse(formData);
//       console.log("Cadastro válido!", formData);
//       navigate("/login"); // Redireciona para login após sucesso
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         error.errors.forEach((err) => {
//           if (err.path[0] === "email") {
//             setEmailError(err.message);  // Definir erro específico para email
//           }
//           if (err.path[0] === "password") {
//             setPasswordError(err.message);  // Definir erro específico para senha
//           }
//           if (err.path[0] === "confirmPassword") {
//             setConfirmPasswordError(err.message);  // Definir erro específico para confirmação de senha
//           }
//         });
//       }
//     }
//   };

//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <h2>Cadastrar</h2>
//       <Input
//         label="E-mail"
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Digite seu e-mail"
//         error={emailError}  // Passando erro específico para o campo
//       />
//       <Input
//         label="Senha"
//         type="password"
//         name="password"
//         value={formData.password}
//         onChange={handleChange}
//         placeholder="Digite sua senha"
//         error={passwordError}  // Passando erro específico para o campo
//       />
//       <Input
//         label="Confirmar Senha"
//         type="password"
//         name="confirmPassword"
//         value={formData.confirmPassword}
//         onChange={handleChange}
//         placeholder="Confirme sua senha"
//         error={confirmPasswordError}  // Passando erro específico para o campo
//       />
//       <button type="submit" className={`${styles.btn} btn primary`}>Cadastrar</button>
//       <p className="headline-bold">Já possui uma conta?</p>
//       <button className="btn" onClick={() => navigate("/login")}>Entrar</button>
//     </form>
//   );
// };

// export default FormRegister;

// Usando o React Hook Form

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../schemas/registerSchema";
import styles from "./FormRegister.module.css";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const FormRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log("Cadastro válido!", data);
    toast.success("Cadastro realizado com sucesso!");
    navigate("/login");
  };

  const onError = (formErrors) => {
    // Exibe cada erro como toast
    Object.values(formErrors).forEach((err) => {
      toast.error(err.message);
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
      <h2>Cadastrar</h2>

      <Input
        label="E-mail"
        type="email"
        placeholder="Digite seu e-mail"
        {...register("email")}
      />

      <Input
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        {...register("password")}
      />

      <Input
        label="Confirmar Senha"
        type="password"
        placeholder="Confirme sua senha"
        {...register("confirmPassword")}
      />

      <button type="submit" className={`${styles.btn} btn primary`}>
        Cadastrar
      </button>

      <p className="headline-bold">Já possui uma conta?</p>
      <button className="btn disabled" onClick={() => navigate("/login")}>
        Entrar
      </button>
    </form>
  );
};

export default FormRegister;
