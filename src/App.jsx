import './App.css'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const Increase = count + 1
  const Decrease = count - 1
  return (
    <div className='btn'>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => {
        setCount(Increase)

      }}>Increase</button>

      <button onClick={() => {
        setCount(Decrease)
      }}>Decrease</button>
    </div>
  )
}

export function ThemeSwitcher() { const [theme, setTheme] = useState("light"); return ( <div style={{ backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}> <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1> <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}> Toggle Theme </button> </div> ); }

export const NameForm = () => {

  const [name, SetName] = useState('')

  return (
    <div>
      <input type="text" onChange={(e) => {
        SetName(e.target.value)
      }} />
      <br />
      <br />
      <h1>Input : {name}</h1>
    </div>
  )
}

export default Counter
