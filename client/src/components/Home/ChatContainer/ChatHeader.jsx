import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import '../ChatContainer/ChatContainer.css'
import Avatar from '../../Navbar/Avatar'
import { useSelector } from 'react-redux'

const ChatHeader = () => {

    const navigate = useNavigate()
    const { id } = useParams();

    const User = useSelector(state => state.fetchUsersReducer)

    const existingUser = User?.filter(user => user._id === id)[0]

  return ( !existingUser ? navigate('/Auth') : 
    <div className='chat-container-header'>
         <Link to={`/User/UserProfile/${existingUser?._id}`} style={{textDecoration: 'none'}}><Avatar>{ existingUser?.name.charAt(0).toUpperCase() }</Avatar></Link>
         <h4>{ existingUser?.name }</h4>
    </div>
  )
}

export default ChatHeader
