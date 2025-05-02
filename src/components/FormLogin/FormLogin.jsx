// // src/components/FormLogin.js
// import styles from "./FormLogin.module.css"
// import Input from "../Input/Input";

// const FormLogin = ({ formData, handleChange, handleSubmit, handleNavigate }) => {
//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <Input
//         label="E-mail"
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Digite seu e-mail"
//       />
//       <Input
//         label="Senha"
//         type="password"
//         name="password"
//         value={formData.password}
//         onChange={handleChange}
//         placeholder="Digite sua senha"
//       />
//       <button type="submit" className={`${styles.btn} btn primary`}>Entrar</button>
//       <p className="headline-bold">Ainda não possui uma conta?</p>
//       <button className="btn disabled" type="button" onClick={handleNavigate}>Cadastrar</button>
//     </form>
//   );
// };

// export default FormLogin;

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/loginSchema";  // Certifique-se de que o loginSchema existe
import Input from "../Input/Input";
import styles from "./FormLogin.module.css";
import { toast } from "react-toastify";  // Importando o Toastify

const FormLogin = () => {
  const navigate = useNavigate();

  // Configuração do React Hook Form com Zod
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),  // Resolvedor Zod para validação
  });

  // Função de submit do formulário
  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // Aqui você pode fazer o processo de login real ou redirecionar
    navigate("/dashboard");  // Exemplo de redirecionamento após login
  };

  // Função de erro que exibe o toast
  const handleError = () => {
    if (errors.email) {
      toast.error(errors.email.message);  // Exibe erro para o campo email
    }
    if (errors.password) {
      toast.error(errors.password.message);  // Exibe erro para o campo password
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>

      <Input
        label="E-mail"
        type="email"
        name="email"
        placeholder="Digite seu e-mail"
        {...register("email")}  // Registro do campo email
        error={errors.email?.message}  // Exibe erro, se houver
      />

      <Input
        label="Senha"
        type="password"
        name="password"
        placeholder="Digite sua senha"
        {...register("password")}  // Registro do campo password
        error={errors.password?.message}  // Exibe erro, se houver
      />

      <button type="submit" className={`${styles.btn} btn primary`}>Entrar</button>

      <p className="headline-bold">Ainda não tem uma conta?</p>
      <button className="btn disabled" onClick={() => navigate("/register")}>
        Criar conta
      </button>
    </form>
  );
};

export default FormLogin;
