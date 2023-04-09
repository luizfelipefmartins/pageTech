import logo  from "../../assets/Logo.svg"


import { Link } from "react-router-dom";
import { MainContainer } from "./style";
import { StyledDefault } from "../../components/Default/style";



export const Home = () => {

    const name = localStorage.getItem("@kenziehub: name");
    const course = localStorage.getItem("@kenziehub: course");

    const logout = () => {
        localStorage.clear();
    }
    
    return (
        <MainContainer>
            <StyledDefault>
                <header>
                    <img src={logo} alt="Kenzie"/>
                    <Link to={"/"} onClick={logout}>Sair</Link>
                </header>
                <section>
                    <h1 className="titleHome">Olá, {JSON.parse(name)}</h1>
                    <span className="subTitleHome">{JSON.parse(course)}</span>
                </section>
                <section className="sectionTwo">
                    <h3 className="titleHome">Que pena! Estamos em desenvolvimento :(</h3>
                    <p className="subTitleTwo">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </section>
            </StyledDefault>
        </MainContainer>
    )
}