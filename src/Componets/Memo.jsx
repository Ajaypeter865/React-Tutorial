import { useState, useMemo } from "react"

const SquareMemo = () => {
    const [num, setNum] = useState([])

    const value = useMemo(() => {
       return num * num
    }, [num])

    return (
        <div>
            <input type="text" placeholder="Enter a number" onChange={(e) => { setNum(e.target.value) }} />
            <h2>Square of the number : {value}</h2>
        </div>
    )
}


export default SquareMemo