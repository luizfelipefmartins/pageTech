import logo from "../../assets/Logo.svg";
import { Link, Navigate } from "react-router-dom";
import { MainContainer } from "./style";
import { StyledDefault } from "../../components/Default/style";
import { HeaderTec } from "../../components/HeaderTec";
import { UlContainer } from "../../components/UlContainer";

export const Home = () => {
  const getUser = localStorage.getItem("@Kenziehub: user");
  const user = JSON.parse(getUser);

  const logout = () => {
    localStorage.removeItem("@Kenziehub: token");
    localStorage.removeItem("@Kenziehub: user");
    Navigate("/")
  };

  return (
    <MainContainer>
      <StyledDefault>
        <header>
          <img src={logo} alt="Kenzie" />
          <Link to={"/"} onClick={logout}>
            Sair
          </Link>
        </header>
        <section>
          <h1 className="titleHome">Olá, {user.name}</h1>
          <span className="subTitleHome">{user.course_module}</span>
        </section>
        <section className="sectionTwo">
          <HeaderTec />
          <UlContainer />
        </section>
      </StyledDefault>
    </MainContainer>
  );
};
