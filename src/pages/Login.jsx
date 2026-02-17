import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-container'>
      <h2>Login</h2>
       <input type="email" placeholder='Enter Email' />
        <input type="text"  placeholder='Enter Password' />
        <button>Login</button>
      <Link to='/register'>Create an account.!</Link>
    </div>
  )
}

export default Login