import { useState } from "react"

const Counter = () => {

  const [count, setCount] = useState()
  const Increase = count + 1
  const Decrease = count - 1

  return (
    <div>
      <button onClick={setCount(Increase)}>Increase</button>
      <button onClick={setCount(Decrease)}>Decrease</button>
    </div>
  )
}


export default Counter