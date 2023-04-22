import logo from "../../assets/Logo.svg";

import { Link } from "react-router-dom";
import { FormRegister } from "../../components/FormRegister";
import { MainRegister } from "./style";
import { StyledDiv } from "../../components/Default/style";
import { StyledDivTwo } from "../../components/Default/style";

export const Register = () => {
  return (
    <MainRegister>
      <StyledDiv className="default" contWid={320}>
        <header>
          <img src={logo} alt="Kenzie" />
          <Link to="/">Voltar</Link>
        </header>
        <StyledDivTwo className="formContainer" contWid={270}>
          <FormRegister />
        </StyledDivTwo>
      </StyledDiv>
    </MainRegister>
  );
};
