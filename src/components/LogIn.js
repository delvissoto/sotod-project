import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const LogIn = () => {
    const initialUserState = {
        email: "",
        password: ""
      };
    
      const [user, setUser] = useState(initialUserState);
      const [message, setMessage] = useState(null)
      const [showPassword, setShowPassword] = useState(initialUserState.password)
      const navigate = useNavigate();
      axios.defaults.withCredentials = true;  
      const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
       
          await axios.post("http://52.86.154.61:8080/users/login", user)
          
          .then(res => {
            if(res.data.Status === "Success") {
              // navigate('/');
            }else{
              setMessage(res.data.Error)
            }
          })
           .then(err => console.log(err))
       
      };
    
      return (
        <section className='Sign_up_section'>
          <div className='Sign_up_div'>
            <div>
              <h2>Log In</h2>
              <p>Welcome Back!</p>
            </div>
          <form onSubmit={handleSubmit}>
            
            <input className='sign_up' placeholder='Email' type='email' id='email' name='email' value={user.email} onChange={handleChange} required /><br />
    
           
            <input className='sign_up'placeholder='Password'  type={showPassword ? 'text' : 'password'} id='password' name='password' value={user.password} onChange={handleChange} required />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              Show Password
            </button>
            <br />
              {message && <p>{message}</p>}
            <p>Don't have an account? <Link to="/adduser">Create Account </Link> </p>
           
            <input id="signupsubmit"  type='submit' className='submitbutton' value="Log In" />
          </form>
          </div>
        </section>
      );
    };

export default LogIn