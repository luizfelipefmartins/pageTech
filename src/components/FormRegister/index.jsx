import { useForm } from "react-hook-form";
import { api } from "../../service/api";
import { Input } from "../Input";
import { validRegister } from "../../validation/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validRegister),
  });

  const navigate = useNavigate();

  const submit = async (InputValue) => {
    try {
      const response = await api.post("/users", InputValue);
      toast.success("Usúario cadastrado com sucesso");
      setTimeout(() => {
        navigate("/");
      }, 4000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <h3 className="title">Crie sua conta</h3>
        <span className="subTitle">Rapido e grátis, vamos nessa</span>
        <Input label="Nome" type="name" {...register("name")} />
        {errors.name ? <p className="error">{errors.name.message}</p> : null}
        <Input label="Email" type="email" {...register("email")} />
        {errors.email ? <p className="error">{errors.email.message}</p> : null}
        <Input label="Senha" type="password" {...register("password")} />
        {errors.password ? (
          <p className="error">{errors.password.message}</p>
        ) : null}
        <Input
          label="Confirmar Senha"
          type="password"
          {...register("confirm")}
        />
        {errors.confirm ? (
          <p className="error">{errors.confirm.message}</p>
        ) : null}
        <Input label="Bio" type="text" {...register("bio")} />
        {errors.bio ? <p className="error">{errors.bio.message}</p> : null}
        <Input label="Contato" type="text" {...register("contact")} />
        {errors.contact ? (
          <p className="error">{errors.contact.message}</p>
        ) : null}
        <label className="label">Selecionar módulo</label>
        <select {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo)
          </option>
          <option value="Segundo módulo (Frontend Avançado))">
            Segundo módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo
          </option>
        </select>
        {errors.course_module ? (
          <p className="error">{errors.course_module.message}</p>
        ) : null}
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};
