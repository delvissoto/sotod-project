import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddItems = () => {
  const [items, setItems] = useState({
    user_name:"",
    password:"",
    email:""
  })


  
const navigate = useNavigate();


  const handleChange = (e) =>{
    setItems((values) =>({...values, [e.target.name]: e.target.value }));
   
   
  }
  console.log(items)
  
 const handleSubmit = async e =>{
  e.preventDefault();
  try{ 
    await axios.post('http://localhost:8080/users', items);
      navigate('/')
 }catch(err){
 console.log(err)
 }
 }



  return (
    <section>
    <form >
      <label htmlFor='user'>User: </label>
      <input type='text' name='user_name'  onChange={handleChange}required/><br/>

      <label htmlFor='password'>Password: </label>
      <input type='password' name='password'  onChange={handleChange}required/><br/>

      <label htmlFor='email'>Email: </label>
      <input type='email' name='email'  onChange={handleChange}required/><br/>

      {/* <label htmlFor='address'>Address: </label>
      <input type='text' name='address' value={address} onChange={(e) => setAddress(e.target.value)}required/><br/> */}

      <input type='submit' value="create account" onClick={handleSubmit} />

    </form>
  </section>
  )
}

export default AddItems