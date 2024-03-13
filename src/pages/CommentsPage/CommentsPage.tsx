import "./CommentsPage.scss";
import LikeButton from "../../components/LikeButton/LikeButton";
import AddComment from "../../components/AddComment/AddComment";


// This page serves as the main interface for the interactive comments app
const CommentsPage = ()=> {
    return (
        <main>
       <LikeButton/>
       <AddComment />
       </main>
        )
}

export default CommentsPage;