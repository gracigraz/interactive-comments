import "./Comment.scss";
import LikeButton from "../LikeButton/LikeButton";
import Button from "../Button/Button";
import replyIcon from '../../assets/images/icons/icon-reply.svg';
import deleteIcon from '../../assets/images/icons/icon-delete.svg';
import editIcon from '../../assets/images/icons/icon-edit.svg';

import commentsData from '../../data.json';

const Comment = () =>{
    return(
        <div className="comments">
               {commentsData.comments.map((comment) => (
                 <div key={comment.id} className="comments-container">
            <div className="comments__top-div">
                <img className="comments__profile" src={comment.user.image.png} alt={comment.user.username}/>
                <span className="comments__username">{comment.user.username}</span>
                <span className="comments__date">{comment.createdAt}</span>
            </div>
            <p className="comments__body">Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well</p>
            <div className="comments__bottom-div">
                <LikeButton/>
                <Button textBtn="Reply" imgSrc={replyIcon} imgAlt="Reply icon" textColor="#4448C5"/>  
                <Button textBtn="Delete" imgSrc={deleteIcon} imgAlt="Delete icon" textColor="#ec6368"/>  
                <Button textBtn="Edit" imgSrc={editIcon} imgAlt="Edit icon" textColor='#4448C5'/>  
                </div>
            </div>
            ))}
        </div>
    )
}
export default Comment;