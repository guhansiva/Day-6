import React, { useState } from 'react';
import './login.css';
import Header from './Header.js'
import './App.js'
import { useNavigate } from 'react-router-dom';

//import Header from './Header.js'

function Login() {
    
    const [username, setUsername] = useState('');

     const navigate = useNavigate();
    
 const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  

   const handleLogin = (e) => {
    e.preventDefault();
    // Simple login condition (replace with real auth logic)
    if (username === 'admin') {
        
      // Navigate to dashboard
      navigate('/Home');
      
    } else {
      alert('Invalid credentials');
    }
  };


  return (
    
  

      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
            <Header></Header>
          <h2>Login</h2>

          <input
            type="text"
            placeholder="Your Name"
            required
            onChange={handleUsernameChange}
          />

          <button type="submit">Login</button>
        </form>
      </div>
      

  );
}

export default Login;
