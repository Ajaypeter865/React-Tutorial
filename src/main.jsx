import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter, {ThemeSwitcher}from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
    <ThemeSwitcher/>
  </StrictMode>,
)


