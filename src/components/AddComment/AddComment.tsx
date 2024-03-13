import RectangularButton from "../RectangularButton/RectangularButton";

import "./AddComment.scss";

const AddComment = () =>{
    return(

        <form className="add-comment">
        {/* <img/> */}
            <textarea className="add-comment__input" placeholder="Add a comment..."/>
            <div className="add-comment__div">        
                <div className="add-comment__profile"></div>
                <RectangularButton/>
            </div>
        </form>
    )
}
export default AddComment;