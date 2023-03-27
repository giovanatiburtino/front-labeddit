import { CommentCard, LikeDislikeContainer } from "./style";
import LikeIcon from "../../assets/like.svg"
import DislikeIcon from "../../assets/dislike.svg"
import axios from "axios";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import { useState } from "react";

function Comment(props){
    const { comment, fetchComments} = props

    const [isLoading, setIsLoading] = useState(false);

    const like = async () => {
        setIsLoading(true)
    
        try {
          const token = window.localStorage.getItem(TOKEN_NAME);
    
          const config = {
            headers: {
              Authorization: token
            }
          };
    
          const body = {
            like: true
          }
    
          await axios.put(BASE_URL + `/comments/${comment.id}/like`, body, config);
    
          setIsLoading(false)
          fetchComments()
        } catch (error) {
          console.error(error?.response?.data);
          window.alert(error?.response?.data)
        }
      };

      const dislike = async () => {
        setIsLoading(true)
    
        try {
          const token = window.localStorage.getItem(TOKEN_NAME);
    
          const config = {
            headers: {
              Authorization: token
            }
          };
    
          const body = {
            like: false
          }
    
          await axios.put(BASE_URL + `/comments/${comment.id}/like`, body, config);
    
          setIsLoading(false)
          fetchComments()
        } catch (error) {
          console.error(error?.response?.data);
          window.alert(error?.response?.data)
        }
      };

    return(
        <CommentCard>
            <span>Enviado por: {comment.creator.name}</span> 
            <p>{comment.content}</p>
            <LikeDislikeContainer>
                <button className="btn-like" disabled={isLoading} onClick={like}>
                    <img src={LikeIcon} alt="Botão de like"/>
                </button>
                <p>{comment.likes}</p>
                <button className="btn-dislike" disabled={isLoading} onClick={dislike}>
                    <img src={DislikeIcon} alt="Botão de dislike"/>
                </button>
                <p>{comment.dislikes}</p>
            </LikeDislikeContainer>
        </CommentCard>
    )
}

export default Comment;