import { useState } from 'react'
import './App.css'
import Nav from './compo/nav-ber/Nav'
import Shop from './compo/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav></Nav>
      <Shop></Shop>
    </div>
  )
}

export default App
