import React from 'react'
import { useSelector } from 'react-redux'

import'../ChatContainer.css'

const ChatFeild = ({ userWithMessage, User}) => {


  const allMessages = useSelector(state => state.fetchAMessagesReducer)

  if (!allMessages ) {
    return null
  }

  return (
    <div className='chat-field'>
       {        
        allMessages[0]?.map(msg => 
          ( 
          <div className={ `message-wrapper ${ msg.userName === userWithMessage?.name ? 'me' : 'others'}`} >
 
            <p className='message' key={msg._id}>
             <strong className='username' >{ msg?.userName !== userWithMessage?.name && msg.userName }</strong>
             {msg.message}
            </p>
          </div>
        ))
      } 
    </div>
  )
}

export default ChatFeild
