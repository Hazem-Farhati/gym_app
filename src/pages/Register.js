import React from 'react'
import '../styles/registre.css'
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate=useNavigate();
  return (
    <div className="cover-r">
    <h1>Registre</h1>
    <input type="text" placeholder="Username" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <input type="password" placeholder="Confirme your password" />
<input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2025-12-31"/>
<div className='gendre-cont'>
<h3>Sex:</h3>
<div className='gendre'>
  <div className='man'>
  <input type="radio"   value="Man"/>
  <label >Man</label>
</div>
<div className='women'>
  <input type="radio"  value="women"/>
  <label >Women</label>
</div>
</div>
</div>
<div className='login-register-r'>
    <div className="login-btn" >Save</div>
    <div className="register-btn" onClick={()=>navigate('/login')}>Back to login</div>
    </div>
</div>

  )
}

export default Register