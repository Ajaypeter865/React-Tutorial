import { useState, useMemo } from "react"

const SquareMemo = () => {
    console.log('Render Memo');

    const [num, setNum] = useState([])

    const value = useMemo(() => {
        console.log('Calculating...');
        
       return num * num
    }, [num])

    const handleClick = () => {
        console.log('Clicked');
        
    }

    return (
        <div>
            <input type="text" placeholder="Enter a number" onChange={(e) => { setNum(e.target.value) }} />
            <h2>Square of the number : {value}</h2>
            <button onClick={handleClick}>Press button</button>
        </div>
    )
}


export default SquareMemo