import "./Comment.scss";
import LikeButton from "../LikeButton/LikeButton";
import Button from "../Button/Button";
import replyIcon from '../../assets/images/icons/icon-reply.svg';
// import deleteIcon from '../../assets/images/icons/icon-delete.svg';
// import editIcon from '../../assets/images/icons/icon-edit.svg';

import commentsData from '../../data.json';

const Comment = () =>{
    return(
        <div className="comments">
               {commentsData.comments.map((comment) => (
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
            ))}
        </div>
    )
}
export default Comment;