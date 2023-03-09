import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [ count, setCount ] = useState<any>(0)

  useEffect(() => {
    console.log("hello")
  }, [])

  return (
    <div className="App">
      <div>asdas

        
      </div>
    </div>
  )
}

export default App
