import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter, {ThemeSwitcher,NameForm}from './App.jsx'
import UpdateTitle from './UpdateTitle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Counter /> */}
    <ThemeSwitcher/>
    <NameForm/>
    <UpdateTitle/>
  </StrictMode>,
)


