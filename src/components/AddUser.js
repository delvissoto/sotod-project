import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    try {
      await axios.post("http://52.86.154.61:8080/users", user);
      console.log(user)
      navigate('/');
    } catch (err) {
      console.error('Error submitting form:', err);
      
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor='user_name'>User: </label>
        <input type='text' id='user_name' name='user_name' value={user.user_name} onChange={handleChange} required /><br />

        <label htmlFor='password'>Password: </label>
        <input type='password' id='password' name='password' value={user.password} onChange={handleChange} required /><br />

        <label htmlFor='email'>Email: </label>
        <input type='email' id='email' name='email' value={user.email} onChange={handleChange} required /><br />

        <input type='submit' value="Create Account" />
      </form>
    </section>
  );
};

export default AddUser;