import { useReducer } from "react"

const reducer = (state, action) => {

    if (action === 'increment') {

        return state + 1
    } else {
        return state - 1
    }

}

const CounterReducer = () => {

    const [value, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <h1>Count : {value}</h1>
            <button onClick={() =>
                dispatch('increment')
            }>Increment</button>
            <button onClick={() =>
                dispatch('dicriment')
            }>Dicriment</button>
        </div>
    )
}


export default CounterReducer