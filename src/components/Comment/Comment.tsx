import "./Comment.scss";
import LikeButton from "../LikeButton/LikeButton";
import Button from "../Button/Button";
import replyIcon from '../../assets/images/icons/icon-reply.svg';
// import deleteIcon from '../../assets/images/icons/icon-delete.svg';
// import editIcon from '../../assets/images/icons/icon-edit.svg';

import commentsData from '../../data.json';

interface User {
    username: string;
    image: { png: string; webp: string };
  }
  
  interface Reply {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: User;
  }
  
  interface CommentProps {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: User;
    replies?: Reply[];
  }
  // Assume data has the correct structure.
const data = commentsData as { comments: CommentProps[] };

const Comment: React.FC = () =>{
    const renderReplies = (replies: Reply[]) => {
        return replies.map((reply) => (
            <div key={reply.id} className="comments__reply">
                {/* Reply structure similar to comment */}
                <div className="comments__top-div">
                    <img className="comments__profile" src={reply.user.image.png} alt={reply.user.username}/>
                    <span className="comments__username">{reply.user.username}</span>
                    <span className="comments__date">{reply.createdAt}</span>
                </div>
                <p className="comments__body">{reply.content}</p>
                <div className="comments__bottom-div">
                    <LikeButton score={reply.score}/>
                    <Button textBtn="Reply" imgSrc={replyIcon} imgAlt="Reply icon" textColor="#4448C5"/>  
                </div>
            </div>
        ));
    };
    return(
        <div className="comments">
               {commentsData.comments.map((comment) => (
                <>
                 <div key={comment.id} className="comments__container">
            <div className="comments__top-div">
                <img className="comments__profile" src={comment.user.image.png} alt={comment.user.username}/>
                <span className="comments__username">{comment.user.username}</span>
                <span className="comments__date">{comment.createdAt}</span>
            </div>
            <p className="comments__body">{comment.content}</p>
            <div className="comments__bottom-div">
                <LikeButton score={comment.score}/>
                <Button textBtn="Reply" imgSrc={replyIcon} imgAlt="Reply icon" textColor="#4448C5"/>  
                {/* <Button textBtn="Delete" imgSrc={deleteIcon} imgAlt="Delete icon" textColor="#ec6368"/>  
                <Button textBtn="Edit" imgSrc={editIcon} imgAlt="Edit icon" textColor='#4448C5'/>   */}
                </div>
               
            </div>
            <div  className="comments__reply-container">
                 {/* Render replies if any */}
                 {comment.replies && renderReplies(comment.replies)}
            </div>
            </>
            ))}
        </div>
    )
}
export default Comment;