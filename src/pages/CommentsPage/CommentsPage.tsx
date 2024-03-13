import "./CommentsPage.scss";

import AddComment from "../../components/AddComment/AddComment";


// This page serves as the main interface for the interactive comments app
const CommentsPage = ()=> {
    return (
        <main className="interactive-comments">
       <AddComment />
       </main>
        )
}

export default CommentsPage;