import React  from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Avatar from './Avatar'
import './Navbar.css'

const Navbar = () => {

  const currentUser = useSelector(state => state.currentUserReducer)
  const loginUser = localStorage.getItem('Login');
  // const dispatch = useDispatch();

   console.log(loginUser);

  let handleInOut = () => {
   return loginUser ? loginUser = localStorage.removeItem('Login') : null;
  }

  return (
    <div className='navbar'>
      
       <Link to='/' className='logo' >Chat App</Link>

       <ul>
         <li><Link to='/' className='nav-links' >Home</Link></li>
         <li><Link to='/About' className='nav-links'>About</Link></li>
         <li><Link to='/Services' className='nav-links'>Services</Link></li>
         <li><Link to='/Contact' className='nav-links'>Contact</Link></li>
       </ul>

       <input type="search" className='search-box' placeholder='Search hear...'/>

       <div className="auth-box">
        { loginUser && 
          <Link to={`/User/UserProfile/${currentUser?.result?._id}`} style={{textDecoration: 'none'}}>
            <Avatar>{ currentUser?.result.name.charAt(0).toUpperCase() }</Avatar>
          </Link>
        }
         <Link to='/Auth' 
         style={{textDecoration: 'none'}} 
         className='sign-log-btn' 
         onClick={handleInOut}>
            {
              !loginUser? 'Login' : 'Log out'
            }
         </Link>
       </div>
       
    </div>
  )
}

export default Navbar
