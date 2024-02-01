import React, { useState } from 'react'


const AddItems = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress]= useState('')

  const handleChange = (e)  =>{

  }



  const handleSubmit = (e) =>{
    e.preventDefaul()
    

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

      <label htmlFor='address'>Address: </label>
      <input type='text' name='address' value={address} onChange={(e) => setAddress(e.target.value)}required/><br/>

      <input type='submit' value="create account"/>

    </form>
  </section>
  )
}

export default AddItems