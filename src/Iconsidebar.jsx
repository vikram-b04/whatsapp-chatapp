import React from 'react'
import './Iconsidebar.css';
import status from './images/Status.png';
import profilepic from './images/profilepic.jpg'

export const Iconsidebar = () => {
  return (
    <div className='Iconsidebar'>
        <div className='message mt-4'>
          <i class="ms-4 bi bi-chat-text"></i>
        </div>
        <div className='call mt-3'>
          <i class="ms-4 bi bi-telephone"></i>
        </div>
        <div className='status ms-4 mt-3'>
          <img src={status} alt="" />
        </div>
        
        <div className='star'>
          <i class="ms-4 bi bi-star"></i>
        </div>
        <div className='archive mt-3'>
          <i class="ms-4 bi bi-archive"></i>
        </div>
        <div className='settings mt-3'>
          <i class="ms-4 bi bi-gear"></i>     
        </div>
        <div className='profilepic mt-3'>
          <img src={profilepic} alt="" />
        </div>
        
        
        
    </div>
  )
}