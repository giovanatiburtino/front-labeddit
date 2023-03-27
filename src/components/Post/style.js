import styled from "styled-components";

export const PostCard = styled.div`
    width: 22.75rem;
    height: 10.438rem;
    background: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 0.75rem;
    margin-top: 1.5rem;

    span{
        font-family: 'IBM Plex Sans';
        font-weight: 400;
        font-size: 12px;
        color: #6F6F6F;
        padding-left: 3%;
    }

    p{
        font-family: 'IBM Plex Sans';
        font-weight: 400;
        font-size: 18px;
        color: #000000;
        padding: 5% 3%;
    }
`

export const PostDetails = styled.div`
    display: flex;
    gap: 0.625rem;
    padding-left: 3%;
`

export const LikeDislikeContainer = styled.div`
    width: 6.125rem;
    height: 1.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4.66667px;
    gap: 0.5rem;
    border: 0.796748px solid #ECECEC;
    border-radius: 1.75rem;

    img{
        width: 0.875rem;
        height: 0.875rem;
    }

    p{
        font-family: 'IBM Plex Sans';
        font-weight: 700;
        font-size: 9.56098px;   
        color: #6F6F6F;
    }

    button{
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .btn-like:active{
        color: green;
    }

    .btn-dislike:active{
        background: red;
    }
`

export const CommentButtonContainer = styled.div`
    width: 4.063rem;
    height: 1.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4.66667px;
    gap: 0.5rem;
    border: 0.793333px solid #ECECEC;
    border-radius: 1.75rem;

    img{
        width: 0.875rem;
        height: auto;
    }

    p{
        font-family: 'IBM Plex Sans';
        font-weight: 700;
        font-size: 9.56098px;   
        color: #6F6F6F;  
    }

    button{
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }
`