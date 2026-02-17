import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

const Register = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = ()=>{
    if(name === '' || email === "" || password===""){
      alert("All field are required.!!");
    }
    else if(!email.includes('@')){
      alert("Please enter valid email.!")
    }
    else if(password.length < 8){
      alert("Password should be atleast 8 characters.!");
    }
    else{
      alert("Register successfully..!");
      localStorage.setItem('user',name);
      navigate('/');
    }
  }

  return (
    <div className='register-container'>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter name' />
        <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' />
        <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' />
        <Link to='/login'>Already have an account.!!</Link>
        <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

export default Register