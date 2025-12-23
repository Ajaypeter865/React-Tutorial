import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Title = () => {

  return <h1 className='title'>Hello from Title Componet</h1>
}

export function App() {

  const jsxHeading = (
    <h1 className='head' tabIndex='5'>
      Hello Ajay from JSX
    </h1>
  )
  return (
    <>
      <FunctionalComponet />
      <Title />
      {jsxHeading}
    </>
  )

}

export const FunctionalComponet = () => {

  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div style={{ margin: '50px' }}>
        <h1>Hello from FunctionalComponet</h1>
        <h3>Counter app</h3>
        <h2>{count}</h2>
        <button onClick={increase}>Add</button>
      </div>
    </>
  )

}




export default App
