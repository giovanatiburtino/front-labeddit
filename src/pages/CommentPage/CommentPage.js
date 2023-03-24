import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { CommentsContainer } from "./CommentPage.style";
import { goToLoginPage } from "../../routes/coordinator";
import Comment from "../../components/Comment/Comment";

export default function CommentsPage(){
    const navigate = useNavigate()

    const pathParams = useParams()

    const [isLoading, setIsLoading] = useState(false);
    const [content, setContent] = useState("");
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const token = window.localStorage.getItem(TOKEN_NAME);
    
        if(!token){
          goToLoginPage(navigate)
        } else {
          fetchComments();
        }
      }, [])

    
    const fetchComments = async () => {
        try {
          const token = window.localStorage.getItem(TOKEN_NAME);
    
          const config = {
            headers: {
              Authorization: token
            }
          };
    
          const response = await axios.get(`${BASE_URL}/comments/${pathParams.postId}`, config)
    
          setComments(response.data)
        } catch (error) {
          console.error(error?.response?.data);
          window.alert(error?.response?.data)
        }
    }

    const createComment = async (event) => {
        event.preventDefault()
    
        setIsLoading(true)
    
        try {
          const token = window.localStorage.getItem(TOKEN_NAME);
    
          const config = {
            headers: {
              Authorization: token
            }
          };
    
          const body = {
            content: content
          };

          await axios.post(`${BASE_URL}/comments/${pathParams.postId}/`, body, config)
       
          setContent("");
          setIsLoading(false);
          fetchComments();
        } catch (error) {
          console.error(error?.response?.data);
          window.alert(error?.response?.data);
        }
      }
    


    return(
        <>
            <Header/>
            <CommentsContainer>
            <form onSubmit={createComment}>
                <input value={content} onChange={(event) => setContent(event.target.value)} placeholder="Adicionar comentário"/>
                <button disabled={isLoading}>Responder</button>
            </form>
            {comments.map((comment) => {
                return <Comment key={comment.id} comment={comment}/>
            })}
            </CommentsContainer>
        </>
    )
}