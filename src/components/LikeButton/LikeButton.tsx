import React, {useState} from 'react'
import "./LikeButton.scss"
import plusIcon from '../../assets/images/icons/icon-plus.svg'
import minusIcon from '../../assets/images/icons/icon-minus.svg'

const LikeButton = () =>{
    const [count, setCount] =useState(0)
    const incrementCount =()=>{
        setCount(prevCount => prevCount+1)
    }
    const decrementCount = ()=>{
        setCount(prevCount => prevCount -1)
    }
    return (
        <div className="like-button">
              <button className="like-button__remove" onClick={incrementCount} aria-label="Increase count">
          <img className="like-button__img" src={plusIcon} alt="Plus" />
        </button>
        <span className="like-button__count">{count}</span>
        <button className="like-button__add" onClick={decrementCount} aria-label="Decrease count">
          <img className="like-button__img" src={minusIcon} alt="Minus" />
        </button>
      </div>
    )

}
export default LikeButton