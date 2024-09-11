import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:8003/users'; // Adjust if needed

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const user = data.find(
          (user) =>
            user.email === credentials.email && user.password === credentials.password
        );

        if (user) {
          alert('Login successful!');
          navigate('/data'); // Redirect to data page
        } else {
          alert('Invalid email or password');
        }
      })
      .catch(() => {
        alert('Login failed.');
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={credentials.email}
          required
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          value={credentials.password}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
