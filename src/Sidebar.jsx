import React from 'react'
import './Sidebar.css'
import chatlist from './chatlist.js';

export const Sidebar = ({setOpenchat,setUserlist}) => {

  
  return (
    <div className='Sidebar mt-1 ms-4 border border-0 rounded-start'>
      <div className='d-flex justify-content-between pt-4'>
      <div className='chats text-white fw-bold'>
      <h4>Chats</h4>
      </div>
      <div className='chatsideicon d-flex'>
        <div className='newchat'>
          <i class="bi bi-plus-square"></i>
        </div>
        <div className='filter ms-5 pe-4'>
          <i class="bi bi-filter"></i>
        </div>
      </div>
      </div>

        <div className='searchbar pt-3 pe-4'>
          <form>
            <div className='search'>
            <i class="search-icon bi bi-search"></i>
            <input className='search-input' type="search" placeholder='Search or start a new chat' />
            </div>
          </form>
        </div>

          <div className='chatlist d-flex justify-content-between' >
          <div className=' contactlist'>
            {chatlist.map((kk) => (
              <div className=' d-flex' onClick={()=>{setUserlist([kk]);setOpenchat(true)}}>
                <div className='photo pt-4'>
                  <img src={kk.photo}/>    
                </div>
                <div className='chatdetails pt-4 ps-4'>
                  <h6 className='text-white'>{kk.name}</h6>
                  <p>{kk.message}</p>
                </div>
                <div className='time pt-4 ms-auto ps-2 pe-5'>
                  <p>{kk.time}</p>
                </div>
              </div>
            ))}
          </div>
          </div>

    </div>
  )
}
