import { useForm } from "react-hook-form";
import { Input } from "../Input/index";
import { FormStyledModal } from "./style";
import { useContext } from "react";
import { TechContext } from "../../providers/techContext";

export const FormNewTech = () => {
  const { register, handleSubmit } = useForm("");

  const { submit } = useContext(TechContext);

  return (
    <FormStyledModal onSubmit={handleSubmit(submit)}>
      <Input
        placeholder="Digite a tecnologia"
        label="Nome"
        type="text"
        {...register("title")}
      />
      <label className="label">Selecionar status</label>
      <select {...register("status")}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
      <button className="btn__closeModal" type="submit">
        Cadastrar Tecnologia
      </button>
    </FormStyledModal>
  );
};
