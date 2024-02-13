import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState(false)

    const navigate = useNavigate()
    axios.defaults.withCredentials = true;  

    useEffect(() =>{
        axios.get("http://52.86.154.61:8080/users",).then((response)=>{
          if(response.data.loggedIn == true){
            setAuth(true)
            setName(response.data.decodedToken.userName);
            setEmail(response.data.decodedToken.userEmail)
            
          }
          else{
            setAuth(false)
          }
        })
                
                
    }, [])

  return (
    <>
        {
        auth ?
            <div>
            <h1>My Profile</h1>
                <div>
                    <ul>
                        <li>{name}</li>
                        <li>{email}</li>
                        
                    </ul>
                </div>
            </div>
      :
     <p>not logged in</p>
      }
    </>
  )
}

export default UserProfile
