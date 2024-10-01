import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firsebase'; // Ensure this path points to your Firebase setup
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value  
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData; // Destructure email and password from formData

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User successfully registered:', user);
      
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input 
            type="password"
            name="password" 
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
