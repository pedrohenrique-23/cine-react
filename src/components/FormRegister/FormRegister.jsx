// // Usando o React Hook Form

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { registerSchema } from "../../schemas/registerSchema";
// import styles from "./FormRegister.module.css";
// import Input from "../Input/Input";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// // Importação Firebase
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/services/firebase"; // ajuste o caminho se necessário

// const FormRegister = () => {
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(registerSchema),
//   });

//   const onSubmit = async (data) => {
//     try {
//       await createUserWithEmailAndPassword(auth, data.email, data.password);
//       toast.success("Cadastro realizado com sucesso!");
//       navigate("/login");
//     } catch (error) {
//       if (error.code === "auth/email-already-in-use") {
//         toast.error("Este e-mail já está em uso.");
//       } else if (error.code === "auth/weak-password") {
//         toast.error("A senha deve ter pelo menos 6 caracteres.");
//       } else {
//         toast.error("Erro ao cadastrar. Tente novamente.");
//       }
//     }
//   };
  

//   const onError = (formErrors) => {
//     // Exibe cada erro como toast
//     Object.values(formErrors).forEach((err) => {
//       toast.error(err.message);
//     });
//   };

//   return (
//     <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
//       <h2>Cadastrar</h2>

//       <Input
//         label="E-mail"
//         type="email"
//         placeholder="Digite seu e-mail"
//         {...register("email")}
//       />

//       <Input
//         label="Senha"
//         type="password"
//         placeholder="Digite sua senha"
//         {...register("password")}
//       />

//       <Input
//         label="Confirmar Senha"
//         type="password"
//         placeholder="Confirme sua senha"
//         {...register("confirmPassword")}
//       />

//       <button type="submit" className={`${styles.btn} btn primary`}>
//         Cadastrar
//       </button>

//       <p className="headline-bold">Já possui uma conta?</p>
//       <button className="btn disabled" onClick={() => navigate("/login")}>
//         Entrar
//       </button>
//     </form>
//   );
// };

// export default FormRegister;

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../schemas/registerSchema";
import styles from "./FormRegister.module.css";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";

const FormRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Este e-mail já está em uso.");
      } else if (error.code === "auth/weak-password") {
        toast.error("A senha deve ter pelo menos 6 caracteres.");
      } else {
        toast.error("Erro ao cadastrar. Tente novamente.");
      }
    }
  };

  const onError = (formErrors) => {
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
      <button
        className="btn disabled"
        type="button"
        onClick={() => navigate("/login")}
      >
        Entrar
      </button>
    </form>
  );
};

export default FormRegister;
