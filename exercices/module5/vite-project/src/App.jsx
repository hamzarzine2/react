import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {ButtonGood} from './components/Button/ButtonGood'
import './App.css'
import { ButtonOK } from './components/Button/ButtonOK'
import {ButtonBad} from './components/Button/ButtonBad'
import { ResetALL } from './components/Button/ResetAll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ButtonGood/>
        <ButtonOK/>
        <ButtonBad/>
        <ResetALL/>
      </div>      
    </>
  )
}

export default App
