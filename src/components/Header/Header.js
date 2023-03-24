import { useLocation, useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import { TOKEN_NAME } from "../../constants/url";
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import { goToHomePage, goToLoginPage } from "../../routes/coordinator";
import { HeaderCommentPage, HeaderContainer } from "./style";
import CloseIcon from "../../assets/close-icon.svg"

function Header(){
    const navigate = useNavigate()

    const location = useLocation()

    const pathParams = useParams()

    const logout = () => {
        window.localStorage.removeItem(TOKEN_NAME)
        goToLoginPage(navigate)
    }

    const renderHeader = () => {
        switch(location.pathname){
            case "/signup":
                return (
                    <HeaderContainer>
                        <img src={Logo} alt="Logo do labeddit"/>
                        <button onClick={logout}>Entrar</button>
                    </HeaderContainer>
                )
            case "/home": 
                return(
                    <HeaderContainer>
                        <img src={Logo} alt="Logo do labeddit"/>
                        <button onClick={logout}>Logout</button>
                    </HeaderContainer>
                )
            case (`/comments/${pathParams.postId}`): 
                return(
                    <HeaderCommentPage>
                        <button onClick={() => goToHomePage(navigate)}>
                            <img src={CloseIcon} alt="Botão de fechar aba de comentário"/>
                        </button>
                        <img src={Logo} alt="Logo do labeddit"/>
                        <button onClick={logout}>Logout</button>
                    </HeaderCommentPage>
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