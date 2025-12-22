import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Title = () => {

  return <h1 className='title'>Hello from Title Componet</h1>
}

function App() {

  const jsxHeading = (
    <h1 className='head' tabIndex='5'>
      Hello Ajay from JSX
    </h1>
  )
  return (
    <>
      <Title />
      {jsxHeading}
    </>
  )

}




export default App
