import "./Comment.scss";
import LikeButton from "../LikeButton/LikeButton";
import Button from "../Button/Button";
import replyIcon from '../../assets/images/icons/icon-reply.svg';
import deleteIcon from '../../assets/images/icons/icon-delete.svg';
import editIcon from '../../assets/images/icons/icon-edit.svg';

const Comment = () =>{
    return(
        <div className="comments">
            <div className="comments__top-div">
                <div className="comments__profile"></div>
                <span className="comments__username">amyrobson</span>
                <span className="comments__date">1 month ago</span>
            </div>
            <p className="comments__body">Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well</p>
            <div className="comments__bottom-div">
                <LikeButton/>
                <Button textBtn="Reply" imgSrc={replyIcon} textColor="#4448C5"/>  
                <Button textBtn="Delete" imgSrc={deleteIcon} textColor="#ec6368"/>  
                <Button textBtn="Edit" imgSrc={editIcon} textColor='#4448C5'/>  
            </div>
        </div>
    )
}
export default Comment;