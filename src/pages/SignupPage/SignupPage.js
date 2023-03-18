import React from 'react'
import { SignupContainer } from './SignupPage.style'

const SignupPage = () => {
  return (
    <SignupContainer>
        <section className="header-signup-container">
            <h1>Olá, boas vindas ao LabEddit</h1>
        </section>

        <article>
          <form autoComplete="off">
            <section>
              <input
                name={"name"}
                placeholder="Apelido"
              />
            </section>

            <section>
              <input
                name={"email"}
                placeholder="Email"
              />
            </section>

            <section>
              <input
                type="password"
                name={"password"}
                placeholder="Senha"
              />
            </section>

            <p>Ao continuar, você concorda com o nosso <span> Contrato de <br/> usuário </span> e nossa <span> Política de Privacidade.</span></p>

            <section className="agreement-checkbox">
                <input
                  type="checkbox"
                />
                Eu concordo em receber emails sobre coisas legais <br/> no Labeddit
            </section>

            <button>Cadastrar</button>
          </form>

        </article>
    </SignupContainer>
  )
}

export default SignupPage