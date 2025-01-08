import React, {useState, useEffect} from 'react'
import apiClient from '../axios/apiClient'

function About() {
  const [post,setPost] = useState([])
  const [photos, setPhotos] = useState([])
  const [userId, setUserId] = useState(0);
  const [ title, setTitle] = useState("")
  const [body, setBody] = useState("")

async function getPost () {
  try{
const res = await apiClient.get("/posts");
setPost(res.data)
console.log(res);

  }catch(error) {
    console.log(error);    
  }
}

async function getPhotos () {
  try{
const res = await apiClient.get("/photos")
setPhotos(res.data)
console.log(res);

  }catch(error){
    console.log(error);
    
  }
}

useEffect (() => {
  getPost()
  getPhotos()
}, [])

async function handleSendPost() {
  const payload = {
    title: title,
    body: body,
    userId: userId
  }
  try {
const res = await apiClient.post("/posts", payload)
console.log(res);
if (res.status == 201){
  setTitle("")
  setBody("")
  setUserId("")
}
  }catch{(error)
    console.log(error);
    
  }
}

async function deletePost (id) {
  try{
const res = await apiClient.delete(`/posts/${id}`)
console.log(res);
alert("succes deleted")
  }catch(error){
    console.log(error);
    
  }
}

  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input type="text" value={body} onChange={(e) => setBody(e.target.value)}/>
      <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)}/>
      <button onClick={() => handleSendPost()}>send post</button>
      {
        post.splice(0,11).map((item) => ( 
        <div key={item.id}>
          <h3>{item.title}</h3>
          <button onClick={() => deletePost(item.id)}>delete</button>
        </div>
        ))
      }
      { 
        photos.splice(0,5).map((item) => (
          <div key={item.id}>
            <img src={item.url} alt="" />
          </div>
        ))
      }
    </div>
  )
}

export default About