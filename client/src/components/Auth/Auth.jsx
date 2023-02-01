import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
 import { useSelector } from "react-redux";

import { signup, login } from "../../Actions/auth";
import "./Auth.css";
import { fetchAllUsers } from "../../Actions/fetchUsers";

const Auth = () => {
 
  const dispatch = useDispatch()
  const navigate = useNavigate()

   const currentUser = useSelector((state) => state.currentUserReducer)
  // const User = useSelector(state => state.fetchUsersReducer)
  // console.log(User);
   

  const [clickSignup, setClickSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const submitHandler = (e) => {
    e.preventDefault();
    
    if(!email && !password){
      alert('Enter email and password')
    }
    if (clickSignup) {
        dispatch(signup({name, email, password}, navigate))
        dispatch(fetchAllUsers())
    }else{
       if(email !== currentUser?.result.email) { 
        alert("enter valid email") 
       }
        else if(password !== currentUser?.result.password) { 
          alert("enter valid password") 
      }
      else{
        dispatch(login({email, password}))
        localStorage.setItem('Login', true);
        navigate('/')
        
      }
  }}

  return (
    <div className="auth">
      <div className="lines">
        <h1>Welcome in Real Time Chat App</h1>
        <h3 style={{ marginTop: "10px" }}>Be attached with your Friends...</h3>
      </div>
      <div style={{ textAlign: "center" }}>
        <form className="login-form">
          {clickSignup && (
            <div className="for-inputs">
              <label htmlFor="name" style={{ fontWeight: "500" }}>
                Name
              </label>
              <input type="text" id="name" className="log-inputs" onChange={ (e) => setName(e.target.value) } />
            </div>
          )}
          <div className="for-inputs">
            <label htmlFor="email" style={{ fontWeight: "500" }}>
              Email
            </label>
            <input type="email" id="email" className="log-inputs" onChange={ (e) => setEmail(e.target.value) }  />
          </div>
          <div className="for-inputs">
            <span className="for-forgot-pass">
              <label htmlFor="password" style={{ fontWeight: "500" }}>
                Password
              </label>
              {!clickSignup && (
                <h4 style={{ color: "dodgerblue", fontSize: "13px" }}>
                  forgot Password?
                </h4>
              )}
            </span>
            <input type="password" id="password" className="log-inputs" onChange={ (e) => setPassword(e.target.value) } />
          </div>
          <input
            type="submit"
            value={clickSignup ? "Signup" : "Login"}
            className="auth-login-btn"
            onClick={ submitHandler }
          />
        </form>
        <h4 style={{ marginTop: "10px" }}>
          {!clickSignup ? "Dont't have an Account?" : "Already have an Account"}{" "}
          &nbsp;
          <span
            className="sign-switch"
            onClick={() => setClickSignup(!clickSignup)}>
            {!clickSignup ? "Signup" : "Login"}
          </span>
        </h4>
      </div>
    </div>
  );
};

export default Auth;
