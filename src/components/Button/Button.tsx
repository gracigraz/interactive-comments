import React from 'react'
import "./Button.scss"

type ButtonProps = {
    textBtn: string;
    imgSrc: string;
    textColor: string;
};

const Button = ({textBtn, imgSrc, textColor}: ButtonProps) =>{
    const btnStyle ={
        color: textColor,
    }
    return (
    <button  className='button'>
        <img className='button__icon' src={imgSrc} alt="Reply"/>
        <span className='button__text' style={btnStyle}>{textBtn}</span>
    </button >
    )

}
export default Button