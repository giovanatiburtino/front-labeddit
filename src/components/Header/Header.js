import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import { TOKEN_NAME } from "../../constants/url";
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import { goToLoginPage } from "../../routes/coordinator";
import { HeaderContainer } from "./style";

function Header(){
    const navigate = useNavigate()

    const location = useLocation()

    const logout = () => {
        window.localStorage.removeItem(TOKEN_NAME)
        goToLoginPage(navigate)
    }

    const renderHeader = () => {
        switch(location.pathname){
            case "/signup":
                return (
                    <HeaderContainer>
                        <img src={Logo} alt="logo do labeddit"/>
                        <button onClick={logout}>Entrar</button>
                    </HeaderContainer>
                )
            case "/home": 
                return(
                    <HeaderContainer>
                        <img src={Logo} alt="logo do labeddit"/>
                        <button onClick={logout}>Logout</button>
                    </HeaderContainer>
                )
            default:
                return (
                    <NotFoundPage>
                        Página não encontrada
                    </NotFoundPage>
                )
        }
    }

    return (
        <>
            {renderHeader()}
        </>
    )
}

export default Header;