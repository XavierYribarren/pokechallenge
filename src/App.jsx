import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Scene from './components/Scene'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


    <Scene/>

    {/* <div className='triggering'>dqzdqzd</div> */}
    </>
  )
}

export default App
