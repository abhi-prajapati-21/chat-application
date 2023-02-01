import React from 'react'

import '../../App.css'
import UserList from './UserList/UserList'
import ChatContainer from './ChatContainer/ChatContainer'

const Home = () => {

 
  return (
    <div className='home'>
      <div className="container">
         <div className='userlist-container'>
           <UserList />
         </div>
         <div className="chat-container">
           <ChatContainer />
         </div>
       </div>
    </div>
  )
}

export default Home
