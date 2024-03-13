import React from 'react'
import "./Button.scss"
const Button = () =>{
    return (
    <button  className='button'>
        <img className='button__icon' src="path_to_your_image/reply_icon.png" alt="Reply"/>
        <span className='button__text'>Reply</span>
    </button >
    )

}
export default Button