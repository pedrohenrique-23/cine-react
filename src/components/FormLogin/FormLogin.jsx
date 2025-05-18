import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/loginSchema";
import Input from "../Input/Input";
import styles from "./FormLogin.module.css";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase"; // Importa sua instância do Firebase

const FormLogin = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Login realizado com sucesso!");
      navigate("/dashboard"); // Redireciona para o dashboard
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("Usuário não encontrado.");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Senha incorreta.");
      } else {
        toast.error("Erro ao fazer login. Tente novamente.");
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>

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

      <button type="submit" className={`${styles.btn} btn primary`}>Entrar</button>

      {/* <p className="headline-bold">Ainda não tem uma conta?</p> */}
      <button className="btn disabled" onClick={() => navigate("/register")}>
        Criar conta
      </button>
    </form>
  );
};

export default FormLogin;
