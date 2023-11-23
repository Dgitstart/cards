import React from 'react'
import './Card.css'
import profile_icon from '../Assets/spiderman.jpg'

const Card = () => {
  return (
    <div className='cardO'>
    <div className='cardI'></div>
    <div className='profile'>
        <img src={profile_icon} alt="" />
        <div className='p-title'>Devansh verma</div>
        <div className="p-description">
        hii this is to inform you that my name is devansh verma talking about my studies i have compeleted my graduation in civil engineering from graphic era hill university basicaly my home town is in
        </div>
        <div className="p-button"><a href='email:devanshverma281@gmail.com'>Contact me</a></div>
    </div>
      
    </div>
  )
}

export default Card
