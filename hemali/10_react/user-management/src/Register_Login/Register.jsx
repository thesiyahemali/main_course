
import './Register.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
   
  const[formData,setformData] =useState({name:'',email:'',password:''})
  const navigate = useNavigate();
  const handleChange =(e)=>{
   setformData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault();

    fetch('http://localhost:8003/users',{
      method:'POST',
    }) .then(() => {
      alert('Registration successful!');
      navigate('/login');  // Redirect to login page
    })
    .catch(() => {
      alert('Registration failed.');
    });
  }

  return (
   <>
     <div className="registration-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} value={formData.name} required />
        <input name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} value={formData.password} required />
        <button type="submit">Register</button>
      </form>
    </div>
   </>
  )
}

export default Register