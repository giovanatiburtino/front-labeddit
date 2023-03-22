import styled from "styled-components";

export const LoginContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    .header-login-section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 

        h1{
            font-weight: 700;
            font-size: 36px;
            color: #373737;
            padding-top: 1rem;
        }

        p{
            font-weight: 300;
            font-size: 16px;
            color: #000000;
            padding-bottom: 5rem;
        }
    }

    input{
        width: 22.688rem;
        height: 3.75rem;
        background: #FFFFFF;
        border: 1px solid #D5D8DE;
        border-radius: 4px;
        color: #D5D8DE;
        font-family: 'Noto Sans';
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 0.5rem;
        padding-left: 1rem;
    }


    form button{
        width: 365px;
        height: 51px;
        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
        border-radius: 27px;
        border: none;
        font-family: 'Noto Sans';
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
        margin-top: 2.5rem;
    }

    hr{
        border: 0;
        height: 1px;
        background-image: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
        margin: 1.2rem 0;
    }

    button{
        width: 365px;
        height: 51px;
        border: 1px solid #FE7E02;
        border-radius: 27px;
        background: white;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #FE7E02;
    }
`