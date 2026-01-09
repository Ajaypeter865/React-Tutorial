import { useState } from "react"

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('Light')

  return (
    <div style={{
      backgroundColor: theme === "Light" ? "#fff" : "#333",
      color: theme === "light" ? "#000" : "#fff",
      padding: "20px"
    }}>
      <button onClick={() => setTheme(theme === 'Light' ? 'Dark' : 'Light')}>{theme}</button>
    </div>
  )
}


export default ThemeSwitcher