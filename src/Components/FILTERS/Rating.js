import React from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'

const Rating = ({rating,clickHandler,style}) => {
  return (
    <>
      {
          [...Array(5)].map((_, i)=>{
            return  <span key={i} onClick={()=>clickHandler(i)} style={style}>
                    {
                        rating > i ? (<AiFillStar fontSize='15px'/>):(<AiOutlineStar fontSize='15px'/>)
                    } 
                    </span>
          })
      }
    </>
  )
}

export default Rating
