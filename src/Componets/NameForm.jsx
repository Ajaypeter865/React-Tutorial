
import { useState } from "react";

 const NameForm = () => {

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

export default NameForm