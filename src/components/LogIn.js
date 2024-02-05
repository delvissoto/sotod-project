import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const LogIn = () => {
    const initialUserState = {
        user_name: "",
        password: ""
      };
    
      const [user, setUser] = useState(initialUserState);
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.get("http://52.86.154.61:8080/users", user);
          console.log(user)
          navigate('/');
        } catch (err) {
          console.error(err);
          
        }
      };
    
      return (
        <section className='Sign_up_section'>
          <div className='Sign_up_div'>
            <div>
              <h2>Log In</h2>
              <p>Welcome Back!</p>
            </div>
          <form onSubmit={handleSubmit}>
            
            <input className='sign_up' placeholder='Usernname' type='text' id='user_name' name='user_name' value={user.user_name} onChange={handleChange} required /><br />
    
           
            <input className='sign_up'placeholder='Password' type='password' id='password' name='password' value={user.password} onChange={handleChange} required /><br />
    
            <p>Don't have an account? <Link to="/adduser">Create Account </Link> </p>
           
            <input id="signupsubmit"  type='submit' className='submitbutton' value="Log In" />
          </form>
          </div>
        </section>
      );
    };

export default LogIn