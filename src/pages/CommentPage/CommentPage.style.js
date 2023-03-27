import styled from "styled-components";

export const CommentsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    overflow-y: auto;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;

        button{
            width: 359px;
            height: 47px;
            background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
            border-radius: 12px;
            border: none;
            font-family: 'IBM Plex Sans';
            font-weight: 700;
            font-size: 18px;
            line-height: 23px;
            color: #FFFFFF;
            margin-top: 1rem;
            
            :hover{
                cursor: pointer;
            }
        }
    }

    input{
        margin-top: 2rem;
        width: 22.75rem;
        height: 8.188rem;
        background: #EDEDED;
        border-radius: 0.75rem;
    
        border: none;
        font-family: 'IBM Plex Sans';
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 1.438rem;
        color: #6F6F6F;
        outline: none;
    
        ::placeholder{
            padding-top: 5%;
            padding-left: 5%;
            position: absolute;
        } 
    }

    
`