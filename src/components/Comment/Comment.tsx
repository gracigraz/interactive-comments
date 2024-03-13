import "./Comment.scss";

const Comment = () =>{
    return(
        <div className="comments">
            <div className="comments__top-div">
                <div className="comments__profile"></div>
                <span className="comments__username">amyrobson</span>
                <span className="comments__date">1 month ago</span>
            </div>
            <p className="comments__body">Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well</p>
            
        </div>
    )
}
export default Comment;