import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header';
import { BASE_URL, TOKEN_NAME } from '../../constants/url';
import { goToLoginPage } from '../../routes/coordinator';
import { SignupContainer } from './SignupPage.style'

const SignupPage = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const signup = async (event) => {
    event.preventDefault()

    if (isChecked === true) {
      try {
        setIsLoading(true);

        const body = {
          name: form.name,
          email: form.email,
          password: form.password
        };

        const response = await axios.post(BASE_URL + "/users/signup", body);
        window.localStorage.setItem(TOKEN_NAME, response.data.token);

        setIsLoading(false);
        goToLoginPage(navigate);
      } catch (error) {
        setIsLoading(false);
        console.error(error?.response?.data);
        window.alert(error?.response?.data)
      }
    }
  };


  return (
    <>
    <Header/>
    <SignupContainer>
        <section className="header-signup-container">
            <h1>Olá, boas vindas ao LabEddit</h1>
        </section>

        <article>
          <form onSubmit={signup} autoComplete="off">
            <section>
              <input
                name={"name"}
                type="text"
                value={form.name}
                onChange={changeForm}
                placeholder="Apelido"
              />
            </section>

            <section>
              <input
                name={"email"}
                type="email"
                value={form.email}
                onChange={changeForm}
                placeholder="Email"
              />
            </section>

            <section>
              <input
                name={"password"}
                type="password"
                value={form.password}
                onChange={changeForm}
                placeholder="Senha"
              />
            </section>

            <p>Ao continuar, você concorda com o nosso <span> Contrato de <br/> usuário </span> e nossa <span> Política de Privacidade.</span></p>

            <section className="agreement-checkbox">
                <input
                  type="checkbox"
                  required="required"
                  onClick={() => setIsChecked(true)}
                />
                Eu concordo em receber emails sobre coisas legais <br/> no Labeddit
            </section>

            <button disabled={isLoading} onClick={() => goToLoginPage(navigate)}>Cadastrar</button>
          </form>

        </article>
    </SignupContainer>
    </>
  )
}

export default SignupPage