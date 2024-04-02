import React,{useState,useEffect} from 'react'
import { Iconsidebar } from './Iconsidebar'
import { Sidebar } from './Sidebar'
import { Chat } from './Chat'
import './Whatsapp.css'


export const Whatsapp = () => {

  const [userlist,setUserlist] = useState([])
  const [openchat,setOpenchat] = useState(false)


  return (
    <div className='d-flex'>
         <Iconsidebar />
         <Sidebar setOpenchat = {setOpenchat} setUserlist={setUserlist} />
         <div>
         <div className='chatinterface'>
          {openchat ?(<Chat setOpenchat = {setOpenchat} userlist={userlist} />)
          
          :(<div className='openingpage d-flex justify-content-center align-items-center flex-column'>
          <div className='whatsappicon'>
            <i class="bi bi-whatsapp"></i>
          </div>
          <div className="contents">
           <h5 className='text-white text-center'>WhatsApp for Windows</h5>
           <p className='text-center'>Send and receive messages without keeping your phone online.<br />Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</p>
          </div>
          <div className='encrypted d-flex pt-5'>
           <div className='lock'>
            <i class="bi bi-lock"></i>
           </div>
           <div className='encrypt ps-2'>
            <p>End-to-end encrypted</p>
           </div>
          </div>
  
         </div>)}

     </div>
     </div>
    </div>
  )
}
