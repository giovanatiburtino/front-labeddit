import styled from "styled-components";

export const SignupContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

    .header-signup-container{
        margin-top: 2rem;
        margin-bottom: 10rem;
    }

    h1{
        font-weight: 700;
        font-size: 33px;
        line-height: 43px;
        color: #373737;
        padding: 0 10%;
    }

    input{
        background: #FFFFFF;
        border: 1px solid #D5D8DE;
        border-radius: 4px;
        width: 363px;
        height: 60px;
        font-family: 'Noto Sans';
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #323941;
        margin-bottom: 0.5rem;
        padding-left: 1rem;
    }

    button{
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
        margin-top: 1.5rem;
    }


    p{
        font-family: 'Noto Sans';
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #000000;
        margin-top: 2.5rem;
        margin-bottom: 1rem;
    }

    .agreement-checkbox{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        font-family: 'Noto Sans';
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #000000;
    }

    .agreement-checkbox input{
        height: 18px;
        width: 18px;
        border: 1px solid #C4C4C4;
        border-radius: 2px;
    }

    span{
        color: rgba(64, 136, 203, 1);
    }
`