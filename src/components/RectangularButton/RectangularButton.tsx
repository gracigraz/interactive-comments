import React from 'react'
import "./RectangularButton.scss"


type RectangularButtonProps = {
    text: string;
    bgColor: string;
};


const RectangularButton = ({text, bgColor}: RectangularButtonProps) =>{
    const buttonStyle ={
        backgroundColor: bgColor,
    }
    return (
    <button  className='rectangular-button' style={buttonStyle}>{text}
    </button>
    )

}
export default RectangularButton