import React, { useState } from 'react'
import axios from 'axios'

const AddItems = () => {
  const [items, setItems] = useState({})
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  // const [address, setAddress]= useState('')

  



  const handleSubmit = (e) =>{
    e.preventDefault();

    setItems(values =>({...values, "user_name": user, "password": password, "email": email }));
    // console.log({"user_id": user, "password": password, "email": email})
    console.log(items)
    axios.post('http://52.86.154.61:8888/users', items);
    // setUser =' '
    // setEmail =' '
    // setPassword =' '
  }
  return (
    <section>
    <form onSubmit={handleSubmit}>
      <label htmlFor='user'>User: </label>
      <input type='text' name='user' value={user} onChange={(e) => setUser(e.target.value)}required/><br/>

      <label htmlFor='password'>Password: </label>
      <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}required/><br/>

      <label htmlFor='email'>Email: </label>
      <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}required/><br/>

      {/* <label htmlFor='address'>Address: </label>
      <input type='text' name='address' value={address} onChange={(e) => setAddress(e.target.value)}required/><br/> */}

      <input type='submit' value="create account"/>

    </form>
  </section>
  )
}

export default AddItems