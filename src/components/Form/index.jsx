import { useForm } from "react-hook-form";
import { api } from "../../service/api";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { formValid } from "../../validacion/validation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const Form = () => {
  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(formValid)
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submit = async (InputValue) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", InputValue);
      localStorage.setItem("@kenziehub: token", response.data.token);
      localStorage.setItem("@kenziehub: user", JSON.stringify(response.data.user));
      localStorage.setItem("@kenziehub: name", JSON.stringify(response.data.user.name));
      localStorage.setItem("@kenziehub: course", JSON.stringify(response.data.user.course_module));
      toast.success("Login realizado com sucesso")
      setTimeout(() => {
        navigate("/home")
      }, 4000);
      // console.log(response.data);
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  };

  if(loading) {
    return <p className="loading">Buscansado Usuario...</p>
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <Input placeholder="Digite seu email" label="Email" type="email" {...register("email")} />
        {errors.email ? <p className="error">{errors.email.message}</p> : null}
        <Input placeholder="Digite sua senha" label="Senha" type="password" {...register("password")} />
        {errors.password ? <p className="error">{errors.password.message}</p> : null}
        <button type="submit">Entrar</button>
      </form>
    </>
  );
};
