import React from 'react'
import "./LikeButton.scss"
const LikeButton = () =>{
    return (
    <div className='like-button'>
        <button className='like-button__add'>+</button>
        <span className='like-button__counter'>12</span>
        <button className='like-button__remove'>-</button>
    </div>
    )

}
export default LikeButton