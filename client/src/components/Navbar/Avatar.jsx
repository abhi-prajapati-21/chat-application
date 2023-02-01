import React from 'react'
import './Navbar.css'

const Avatar = ({ children, backgroundColor, px, py, fontSize, margin}) => {
 
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    textAlign: 'center',
    fontSize,
    textDecoration: 'none',
    margin
  }

  return (
    <span className='avatar' style={style}>
      { children }
    </span>
  )
}

export default Avatar
