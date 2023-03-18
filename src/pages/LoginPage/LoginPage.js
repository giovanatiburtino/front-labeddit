import React from 'react'
import Logo from "../../assets/logo.svg"
import { LoginContainer } from './LoginPage.style'

const LoginPage = () => {
  return (
    <LoginContainer>
      <section className="header-login-section">
        <img src={Logo} alt="logo da labeddit"/>
        <h1>LabEddit</h1>
        <p>O projeto de rede social da Labenu</p>
      </section>
      <article>
        <form autoComplete="off">
          <section>
              <input
                name={"email"}
                type="email"
                placeholder="Email"
              />
          </section>

          <section>
              <input
                type="number"
                placeholder="Senha"
              />
          </section>

          <button>Continuar</button>
        </form>

        <hr className="hr1" />

        <button>Crie uma conta!</button>

      </article>
    </LoginContainer>
  )
}

export default LoginPage