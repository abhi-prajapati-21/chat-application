import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
 import { useParams } from 'react-router-dom'

import './ChatContainer.css'
import '../UserList/UserList.css'
import { message, allMessages } from '../../../Actions/Message' 
import { fetchAllUsers } from '../../../Actions/fetchUsers'
import { fetchAllMessages } from '../../../Actions/fetchAllMessages'
import { useEffect } from 'react'

const ChatFooter = ({ User, currentUser }) => {

    useEffect(() => {
     setInterval(()=> {
       dispatch(fetchAllMessages());
     },1000)
    },[])
   

  let [myMessage, setMyMessage] = useState('');

  const dispatch = useDispatch()

  const userWithMessage = User.filter(user => user.name === currentUser.result.name)
  const Id = currentUser?.result?._id;
  const currentUserName = currentUser?.result?.name;
  const { id } = useParams();
   
 if (userWithMessage.length === 0) {
     return null;
    }
     
 const messageHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAllMessages());
    if (myMessage === '') {
        return null
    }
   
    dispatch(message( {Id, message: myMessage, userName: currentUserName}));
    //  dispatch(allMessages( {id, message: myMessage, userName: currentUserName}));
    dispatch(fetchAllUsers());
    setMyMessage('')
  }  


  return (
    <form className="input-btn" onSubmit={ messageHandler }>
      <input 
      type="text" 
      className='input' 
      placeholder='Type hear...' 
      value={ myMessage } 
      onChange={(e) => setMyMessage(e.target.value)} />
    <input className='send-btn' type='submit' value='Send' />
    </form>
  )
}

export default ChatFooter
