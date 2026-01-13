import { useRef } from "react"

const FocusInput = () => {

    const inputRef = useRef(null)

    const handleInput = () => {

        inputRef.current.focus()

    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleInput}>Focus</button>
        </div >
    )

}


export default FocusInput