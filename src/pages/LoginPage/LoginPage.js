import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Logo from "../../assets/logo.svg"
import { LoginContainer } from './LoginPage.style'
import { goToHomePage, goToSignupPage } from "../../routes/coordinator";
import { BASE_URL, TOKEN_NAME } from '../../constants/url';

const LoginPage = () => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const login = async (event) => {
    event.preventDefault()

    try {
      setIsLoading(true);

      const body = {
        email: form.email,
        password: form.password
      };

      const response = await axios.post(BASE_URL + "/users/login", body);
      window.localStorage.setItem(TOKEN_NAME, response.data.token);

      setIsLoading(false);
      goToHomePage(navigate);
    } catch (error) {
      setIsLoading(false);
      console.error(error?.response?.data);
      window.alert("Dados inválidos.")
    }
  };


  return (
    <LoginContainer>
      <section className="header-login-section">
        <img src={Logo} alt="logo da labeddit"/>
        <h1>LabEddit</h1>
        <p>O projeto de rede social da Labenu</p>
      </section>
      <article>
        <form onSubmit={login} autoComplete="off">
          <section>
              <input
                name={"email"}
                value={form.email}
                type="email"
                placeholder="Email"
                onChange={changeForm}
              />
          </section>

          <section>
              <input
                name={"password"}
                value={form.password}
                type="password"
                placeholder="Senha"
                onChange={changeForm}
              />
          </section>

          <button disabled={isLoading}>Continuar</button>
        </form>

        <hr/>

        <button disabled={isLoading} onClick={() => goToSignupPage(navigate)}>Crie uma conta!</button>

      </article>
    </LoginContainer>
  )
}

export default LoginPage