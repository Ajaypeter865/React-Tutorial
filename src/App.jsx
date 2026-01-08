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

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('Light')

  const current = theme
  return (
    <div>
      <button onClick={() =>setTheme( theme === 'Light' ? 'Dark' : 'Light')}>{current}</button></div>
  )
}

export default Counter
