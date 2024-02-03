import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
  return (
    <div>
        {items.map((d, i) =>(
            <ul key = {i}>
                <li>{d.item_id}</li>
                <li>{d.item_name}</li>
                <li>{d.description}</li>
                <li>{d.features}</li>
                <li>{d.features_1}</li>
                <li>{d.features_2}</li>
                <li>{d.features_3}</li>
                <li>{d.features_4}</li>
            </ul>
        ))}
    </div>
  )
}

export default Items