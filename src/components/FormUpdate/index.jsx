import { useForm } from "react-hook-form";
import { Input } from "../Input/index";
import { useContext } from "react";
import { TechContext } from "../../providers/techContext";
import { StyleFormup } from "./style";

export const FormUpdate = ({ tech }) => {
  const { deleteTech, updateTech, setModal } = useContext(TechContext);
  const { register, handleSubmit } = useForm();

  const submit = async (data) => {
    await updateTech(tech.id, data);
    setModal(false);
  }

  return (
    <StyleFormup onSubmit={handleSubmit(submit)}>
      <Input
        placeholder={tech.title}
        value={tech.title}
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
      <div className="container__btn">
        <button
          className="btn__close--modalEdit"
          type="submit"
        >
          Salvar alterações
        </button>
        <button
          className="btn__close--modalDelete"
          type="button"
          onClick={() => deleteTech(tech.id)}
        >
          Excluir
        </button>
      </div>
    </StyleFormup>
  );
};
