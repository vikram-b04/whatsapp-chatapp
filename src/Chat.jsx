import React, { useState } from 'react'
import './Chat.css'
import chatwallpaper from './images/chatwallpaper.avif'

export const Chat = ({setOpenchat,userlist}) => {

  const [inputtag,setInputtag] = useState('')
  const [inputtagarray,setInputtagarray] = useState([])

  const savingarray = () => {
    if(inputtag ==''){
      alert('Please enter a message')
    }else{
      setInputtagarray([...inputtagarray,{id:inputtagarray.length , inputtext:inputtag}])
      setInputtag('')
    }
  }

  const deletechat = (kk) => {
    let removeddata = inputtagarray.filter((dd)=>dd.id !== kk.id)
    setInputtagarray(removeddata)
  }

  return (
    <div className='messageinterface'>
      <div className='chatheader d-flex justify-content-between pt-2 pb-2'>
      <div className='chatinfo d-flex'>
        <div className='backbutton ps-3 align-self-center' onClick={()=> setOpenchat(false)}>
         <i class="bi bi-arrow-left"></i>
        </div>
        <div>
          {userlist.map((cc)=>(
            <div className='profileandname d-flex'>
              <div className='profilephoto'>
              <img src={cc.photo} alt="" />
            </div>
            <div className='name text-white align-self-center ps-3'>
              <h6>{cc.name}</h6>
            </div>
            </div>
          ))}
        </div>
        
      </div>

      <div className='righticons d-flex'>
        <div className='calls d-flex pt-1'>
        <div className='videocall ps-4'>
         <i class="bi bi-camera-video"><b className='break ps-3'>|</b></i>
        </div>
        <div className='voicecall pe-4 ps-3'>
          <i class="bi bi-telephone"></i>
        </div>
        </div>
        
        <div className='searchicon pt-2 ps-3 pe-4'>
          <i class="bi bi-search"></i>
        </div>
      </div>
      </div>

     <div className='chatarea1 d-flex align-items-end'>
      <div className='emojiandlink d-flex pb-3'>
      <div className='emoji ps-4'>
       <i class="bi bi-emoji-smile"></i>
      </div>
      <div className='attachment ps-5'>
       <i class="bi bi-link-45deg"></i>
      </div>
      </div>
      <div className='chatdisplayarea'>

      <div className='messagearea'>
        {
          inputtagarray.map((ss,index)=>
          <div key={index}>
            <div className='chatanddelte'>
            <p>{ss.inputtext}</p>     
            <i class="deletebtn bi-trash ps-2" onClick={()=>deletechat(ss)}></i>
            </div>
           
          </div>)
        }
       </div>

       <div className='inputarea d-flex pb-1'>
       <div className='messagebar ps-4'>
        <input className='search-input  border rounded-pill py-2 px-3' value={inputtag} type="search" placeholder='Type a message' onChange={(event)=>setInputtag(event.target.value)} />
      </div>
       <div className='sendbtn ps-4 pt-1'>
        <i class="bi bi-send" onClick={()=>savingarray()}></i>
      </div>
       </div>
       
      </div>
      <div className='mic ps-5 pe-4'>
        <i class="bi bi-mic"></i>
      </div>
     </div>

    </div>
  )
}
