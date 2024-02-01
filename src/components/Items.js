import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Items = () => {
    const [items, setItems] = useState([])

    useEffect(() =>{
        const fetch = async ()=>{
            try{
                const res = await axios.get("http://52.86.154.61:8888/api/users/")
            }catch(err){
                console.log(err)
            }
        }
    })
  return (
    <div>Items</div>
  )
}

export default Items