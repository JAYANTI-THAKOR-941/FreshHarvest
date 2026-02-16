import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './main.css';

const Header = () => {

  const navigate = useNavigate();

  return (
    <div className='header'>
      <div className="logo">
        <h1>Fresh<span>Harvest</span></h1>
      </div>
      <div className="nav-links">
        <Link to='/'>Home</Link>
        <Link to='/product'>Products</Link>
        <Link to='/services'>Services</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div className="btn-group">
        <button onClick={()=>navigate('/login')}>Login</button>
      </div>
    </div>
  )
}

export default Header