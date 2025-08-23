import { useState } from 'react'
import Display from './pages/display.tsx'
import ContextProvider from './context/contextProvider'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   
  return (
    <div>
     <div>let us use conext now</div>
     <ContextProvider>
      <Display />
     </ContextProvider>
    </div>
  )
}

export default App
