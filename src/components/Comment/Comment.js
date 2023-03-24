import { CommentCard, LikeDislikeContainer } from "./style";
import LikeIcon from "../../assets/like.svg"
import DislikeIcon from "../../assets/dislike.svg"

function Comment(props){
    const { comment } = props

    return(
        <CommentCard>
            <span>Enviado por: {comment.creator.name}</span> 
            <p>{comment.content}</p>
            <LikeDislikeContainer>
                <button className="btn-like">
                    <img src={LikeIcon} alt="Botão de like"/>
                </button>
                <p>{comment.likes}</p>
                <button className="btn-dislike">
                    <img src={DislikeIcon} alt="Botão de dislike"/>
                </button>
            </LikeDislikeContainer>
        </CommentCard>
    )
}

export default Comment;