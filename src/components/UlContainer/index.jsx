import { StyledUl } from "./style";
import { ListCard } from "./ListCard";
import { useContext } from "react";
import { TechContext } from "../../providers/techContext";

export const UlContainer = () => {
  const { techs, modal } = useContext(TechContext);

  return (
    <StyledUl>
      {techs.map((tech) => (
        <ListCard key={tech.id} tech={tech} />
      ))}
    </StyledUl>
  );
};
