import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const API = "https://reqres.in/api/users"

function ItemUser() {
const {id} = useParams ();
const [data, setData] = useState ({});

async function getUserData () {
    try{
const res = await fetch(`${API}/${id}`)
const item = await res.json()

setData(item.data);

console.log(item);

    }catch (error) {
        console.log(error);
        
    }
}
useEffect(() => {
    getUserData()
})

  return (
    <div>
      ItemUser {id}
      <img src={data.avatar} alt="" />
      <p>{data.email}</p>
    </div>
  )
}

export default ItemUser
