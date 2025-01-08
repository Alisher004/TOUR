import React,{ useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const API = "https://reqres.in/api/users/"

function Home() {
  const [title,setTitle] = useState("");
  const [active, setActive] = useState (false)
  const [user, setUser] = useState([])

  function chek(){
  setActive (!active)
  }

async function getUser() {
  try {
const res = await fetch(API)
const item = await res.json()
console.log(item);
setUser(item.data)
  }catch (error) {
    console.log(error);
    
  }
}

useEffect (()=> {
  getUser ()},[])
  
  return (
    <div>
      {active && title}
      <br></br>
      <input value={title} onChange={(e) => setTitle (e.target.value)} type="text" />
      <button onClick={() => chek()}>Click me</button>
      {
        user.map((item) => (
        <div key={item.id}>
          <Link to={`/user/${item.id}`}>
          <img src={item.avatar} alt="" />
          </Link>
        </div>
        ))
      }
    </div>
  )
}

export default Home
