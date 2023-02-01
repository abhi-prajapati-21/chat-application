import React from 'react'
import UserList from '../Home/UserList/UserList'

import './UserProfile.css'
import Profile from './Profile'
import ChatHeader from '../Home/ChatContainer/ChatHeader'

const UserProfile = () => {
  return (
    <div className='home'>
      <div className="container">
        <div className="userlist-container">
          <UserList />
        </div>
        <div className="chat-container">
         <ChatHeader />
         <Profile />
        </div>
      </div>
      
    </div>
  )
}

export default UserProfile
