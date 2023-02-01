import React from 'react'
import {  useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import moment from 'moment'

import Avatar from '../Navbar/Avatar'
import './UserProfile.css'

const Profile = () => {

    
    const { id } = useParams();

    const User = useSelector(state => state.fetchUsersReducer)
    if (!User) {
        return null
    }
    const existingUser = User.filter(user => user._id === id)[0]

  return (
    <div className='profile'>
      <Avatar backgroundColor={'purple'} px={'55px'} py={'45px'} fontSize={'3rem'} margin={'40px 0px 0px 0px'}>
      {
        existingUser?.name.charAt(0).toUpperCase()
      }
      </Avatar>
      <h2 style={{margin: '15px 0px', color: 'white', fontWeight: '400'}}>{ existingUser?.name }</h2>
      <h3 style={{color: 'white', fontWeight: '400'}}>
         Member since  :&nbsp; 
         { moment(existingUser?.joinedOn).fromNow() }
      </h3>
    </div>
  )
}

export default Profile
