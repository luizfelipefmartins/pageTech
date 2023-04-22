import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { formValid } from "../../validation/validation";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/providers";

export const Form = () => {
  const { signIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formValid),
  });

  const [loading, setLoading] = useState(false);

  if (loading) {
    return <p className="loading">Buscansado Usuario...</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit(signIn)}>
        <Input
          placeholder="Digite seu email"
          label="Email"
          type="email"
          {...register("email")}
        />
        {errors.email ? <p className="error">{errors.email.message}</p> : null}
        <Input
          placeholder="Digite sua senha"
          label="Senha"
          type="password"
          {...register("password")}
        />
        {errors.password ? (
          <p className="error">{errors.password.message}</p>
        ) : null}
        <button type="submit">Entrar</button>
      </form>
    </>
  );
};
