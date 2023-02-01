import React, { useEffect}from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import UserList from '../UserList'
import ChatFooter from '../../ChatContainer/ChatFooter'
import ChatFeild from '../../ChatContainer/ChatField/ChatFeild'
import ChatFieldHeader from '../../ChatContainer/ChatFieldHeader'
import NotLogedInUser from './NotLogedInUser'

const UserChat = () => {
    
    const User = useSelector(state => state.fetchUsersReducer)
    const currentUser = useSelector(state => state.currentUserReducer)
    const loginUser = localStorage.getItem('Login');

    console.log(loginUser);
  
    if (!User) {
      return null;
    }
    if (!currentUser ) {
      return null;
    }
  
    const userWithMessage = User.filter(user => user.name === currentUser.result.name)[0]
  return (
    <div className='home'>
      <div className="container">
         <div className='userlist-container'>
           {
            !User ? (<> <h2>Loading...</h2> </>) :
            <UserList />
           }
         </div>
         <div className="chat-container">
           <ChatFieldHeader />
           <ChatFeild 
           User={User}
           userWithMessage= { userWithMessage } 
           currentUser= {currentUser}
           />
           {
             !loginUser ? 
             ( <NotLogedInUser /> ) :
            ( <ChatFooter User={User} currentUser={currentUser}/> )
           }
         </div>
       </div>
    </div>
  )
}

export default UserChat
