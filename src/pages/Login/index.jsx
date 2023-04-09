import { Form } from "../../components/Form"
import logo  from "../../assets/Logo.svg"
import { Link } from "react-router-dom"
import { MainCont } from "./style"
import { StyledDiv } from "../../components/Default/style"



export const Login = () => {

    return (
        <MainCont>
            <StyledDiv contWid={296}>
                <header>
                    <img src={logo} alt="kenzieHub"/>
                </header>
                <section>
                    <div>
                        <h3 className="title">Login</h3>
                    </div>
                    <Form />
                    <div className="register">
                        <p>Ainda não possui uma conta?</p>
                        <Link to={"/register"}>Cadastre-se</Link>
                    </div>
                </section>
            </StyledDiv>
        </MainCont>
    )
}