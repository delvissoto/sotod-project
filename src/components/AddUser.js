import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AddUser = () => {
  const initialUserState = {
    user_name: "",
    password: "",
    email: ""
  };

  const [user, setUser] = useState(initialUserState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
      await axios.post("http://52.86.154.61:8080/users/signup", user)
                 .then(res => {
                  if(res.data.Status === "Success") {
                    navigate('/login');
                  }else{
                    alert("Error")
                  }
                })
                 .then(err => console.log(err))
                 
  };

  return (
    <section className='Sign_up_section'>
      <div className='Sign_up_div'>
        <div>
          <h2>Sign Up</h2>
          <p>It's quick and easy.</p>
        </div>
      <form onSubmit={handleSubmit}>
        
        <input className='sign_up' placeholder='Usernname' type='text' id='user_name' name='user_name' value={user.user_name} onChange={handleChange} required /><br />

       
        <input className='sign_up'placeholder='Password' type='password' id='password' name='password' value={user.password} onChange={handleChange} required /><br />

        
        <input className='sign_up' placeholder='Email' type='email' id='email' name='email' value={user.email} onChange={handleChange} required /><br />

        <p>By clicking Sign Up, you agree to our Terms, Privacy Policy.<br/> You may receive email Notifications from us.</p>
        <p>Have an account? <Link to="/login">Log In</Link> </p>
        <input id="signupsubmit"  type='submit' className='submitbutton' value="Sign Up" />
      </form>
      </div>
    </section>
  );
};

export default AddUser;