import React from 'react'
import "./Button.scss"

type ButtonProps = {
    textBtn: string;
    imgSrc: string;
    textColor: string;
    imgAlt: string;
};

const Button = ({textBtn, imgSrc, imgAlt, textColor}: ButtonProps) =>{
    const btnStyle ={
        color: textColor,
    }
    return (
    <button  className='button'>
        <img className='button__icon' src={imgSrc} alt={imgAlt}/>
        <span className='button__text' style={btnStyle}>{textBtn}</span>
    </button >
    )

}
export default Button