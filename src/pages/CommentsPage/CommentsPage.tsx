import "./CommentsPage.scss";
// import React, {useState} from 'react'

import AddComment from "../../components/AddComment/AddComment";
import Comment from "../../components/Comment/Comment";
// import Modal from "../../components/Modal/Modal";
// This page serves as the main interface for the interactive comments app
const CommentsPage = ()=> {
    // const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    return (
        <main className="interactive-comments">
            
            <Comment />
            <AddComment />
       </main>
        )
}

export default CommentsPage;