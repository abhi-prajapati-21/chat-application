import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Home from './components/Home/Home'
import UserChat from './components/Home/UserList/UserChat/UserChat'
import UserProfile from './components/UserProfile/UserProfile'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Auth' element={<Auth/>} />
      <Route path='/UserChat/:id' element={<UserChat/>} />
      <Route path='/User/UserProfile/:id' element={<UserProfile/>} />
    </Routes>
  )
}

export default AllRoutes
