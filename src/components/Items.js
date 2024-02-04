import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Items = () => {
    const [items, setItems] = useState([])

    useEffect(() =>{
        const fetchAllItems = async ()=>{
            try{
                const res = await axios.get("http://52.86.154.61:8080/items")
                 setItems(res.data)
                
            }catch(err){
                console.log(err)
            }
        }
        fetchAllItems();
    }, [])

    const handleDelete = async (item_id) =>{
        try{
            await axios.delete(`http://52.86.154.61:8080/items/${item_id}`)
            
        }catch(err){
            console.log("Error deleting item: ", err)
        }
    }



  return (
    <div>
        {items.map((item) =>(
            <ul key = {item.item_id}>
                <li>{item.item_id}</li>
                <li>{item.item_name}</li>
                <li>{item.description}</li>
                <li>{item.features}</li>
                <li>{item.features_1}</li>
                <li>{item.features_2}</li>
                <li>{item.features_3}</li>
                <li>{item.features_4}</li>
                <button className='delete' onClick={() => handleDelete(item.item_id)}>Delete</button>
                <Link to={`/updateitems/${item.item_id}`}>
                <button className='update'>Update</button>
                </Link>
                
            </ul>
        ))}
    </div>
  )
}

export default Items