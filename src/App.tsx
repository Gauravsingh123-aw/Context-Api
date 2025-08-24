import { useState } from 'react'
import Display from './pages/display.tsx'
import './App.css'
import { Route,Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
   
  return (
    <div>
     <div>let us use conext now</div>
      <Routes>
        <Route path='/display' element={<Display/>} />
      </Routes>
    </div>
  )
}

export default App
