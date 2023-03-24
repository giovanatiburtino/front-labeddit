import { useContext, useState } from 'react'
import axios from 'axios'
import { CommentButtonContainer, LikeDislikeContainer, PostCard, PostDetails } from './style'
import LikeIcon from "../../assets/like.svg"
import DislikeIcon from "../../assets/dislike.svg"
import CommentIcon from "../../assets/comment.svg"
import { GlobalContext } from '../../contexts/GlobalContext'
import { BASE_URL, TOKEN_NAME } from '../../constants/url'
import { goToCommentPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'

function Post(props){
    const navigate = useNavigate()

    const { post } = props

    const context = useContext(GlobalContext)
    const { fetchPosts } = context

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
    
          await axios.put(BASE_URL + `/posts/${post.id}/like`, body, config);
    
          setIsLoading(false)
          fetchPosts()
        } catch (error) {
          console.error(error?.response?.data);
          window.alert(error?.response?.data)
        }
      };

  return (
    <PostCard>
        <span>Enviado por: {post.creator.name}</span> 
        <p>{post.content}</p>
        <PostDetails>
            <LikeDislikeContainer>
                <button disabled={isLoading} className="btn-like" onClick={like}>
                    <img src={LikeIcon} alt="Botão de like"/>
                </button>
                <p>{post.likes}</p>
                <button disabled={isLoading} className="btn-dislike">
                    <img src={DislikeIcon} alt="Botão de dislike"/>
                </button>
            </LikeDislikeContainer>
            <CommentButtonContainer>
              <button onClick={() => goToCommentPage(navigate, post.id)}>
                <img src={CommentIcon} alt="Botão de comentar"/>
              </button>
                <p>132</p>
            </CommentButtonContainer>
        </PostDetails>
    </PostCard>
  )
}

export default Post