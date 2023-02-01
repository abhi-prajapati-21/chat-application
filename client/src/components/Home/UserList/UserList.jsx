import React from 'react'
import './UserList.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Avatar from '../../Navbar/Avatar'

const UserList = () => {


  const User = useSelector(state => state.fetchUsersReducer);
  const currentUser = useSelector(state => state.currentUserReducer)
   const id = currentUser?.result._id;

  if (!User) {
    return null
  } 

  /////make user profile page///////

  return (
    <div className='user-list'>
      <header className='user-list-header'>  
        <h2>My Friends</h2>
      </header>
      <NavLink to= {`/UserChat/${id}`} className='chat' activeclassname='active' style={{textDecoration: "none"}}>
        <h2>Chat &#8594;</h2> 
      </NavLink>
      <section className='users'>
        <h2>Users &#8595;</h2> 
      </section>
      { 
        User.map(user => (
          <NavLink to={`/User/UserProfile/${user._id}`} className="user-box" activeclassname='active' style={{textDecoration: "none"}} key={user._id}>
            <Avatar>{user.name.charAt(0).toUpperCase()}</Avatar>
            <h4>{user.name}</h4>
         </NavLink>
      ))
      }

    </div>
  )
}

export default UserList
