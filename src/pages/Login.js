import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'
const Login = () => {
  const navigate = useNavigate();

  return (
    
    <div className="cover">
    <h1>Login</h1>
    <input type="text" placeholder="username" />
    <input type="password" placeholder="password" />
<div className='login-register'>
    <div className="login-btn" >Login</div>
    <div className="register-btn" onClick={()=>navigate('/register')}>Register</div>
    </div>
</div>
  )
}

export default Login