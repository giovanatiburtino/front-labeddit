import styled from "styled-components"

export const HeaderContainer = styled.div`
    width: 100%;
    height: 3.125rem;
    background: #EDEDED;
    display: flex;
    align-items: center;

    img{
        width: 1.751rem;
        height: 1.79rem;
        margin-left: 45%;
    }

    button{
        font-family: 'Noto Sans';
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 1.563rem;
        color: #4088CB;
        border: none;
        padding-left: 6rem;
        :hover{
            cursor: pointer;
        }
    }
`

export const HeaderCommentPage = styled.div`
    width: 100%;
    height: 3.125rem;
    background: #EDEDED;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;

    img{
        width: 1.751rem;
        height: 1.79rem;
    }

    button{
        font-family: 'Noto Sans';
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 1.563rem;
        color: #4088CB;
        border: none;
        :hover{
            cursor: pointer;
        }
    }
`