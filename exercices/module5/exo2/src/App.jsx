import { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Opinion from './components/Opinion'
import { opinionContext } from '../context/OpinionContext'
import Form from './components/Form'

function App() {

  const opContext = useContext(opinionContext)
  let opinions = opContext.getAllOpinion();

  return (
    <>
      {opinions.map((opinion) => (
        <Opinion key={opinion.id} value={opinion} />
      ))}
      <Form/>
    </>
  )
}

export default App
