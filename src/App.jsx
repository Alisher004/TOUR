import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './router'

const API = "https://www.thecocktaildb.com/"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h2>{count}</h2>
      <button onClick={() => setCount(count+1)}>add</button>
      {count &&
      <button onClick={() => setCount(count-1)}>dec</button>
      } */}
            <RouterProvider router={myRouter}/>

      {/* <a href="/">Home</a>
      <a href="./About">About</a>
      <a href="./Contact">Contact</a>
      <a href="./Ali">Ali</a> */}
    </>
  )
}

export default App
