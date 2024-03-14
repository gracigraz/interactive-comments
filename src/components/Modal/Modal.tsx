import React from 'react'
import './Modal.scss'
import RectangularButton from '../RectangularButton/RectangularButton'


const Modal = ()=>{
    return (
        
        <div className='modal'>
            <p className='modal__title'>Delete comment</p>
            <p className='modal__body'>Are you sure you want to delete this comment? This will removethe comment and can't be undone</p>
            <div className='modal__btns'>
                <RectangularButton text="NO, CANCEL" bgColor="#67727e"/>
                <RectangularButton text="YES, DELETE" bgColor="#ec6368"/>
            </div>
        </div>
    )
}
export default Modal