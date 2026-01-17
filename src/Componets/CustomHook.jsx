import { useEffect, useState } from "react"


const useWindoWidth = () => {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {setWidth(window.innerWidth)}

        window.addEventListener('resize', handleResize)

        return window.removeEventListener('resize', handleResize)
    }, [])

    return width
}

const WindowTracker = () => {

    console.log('Render CustomHook');

    const width = useWindoWidth()
    return(
        <div>
            <h1>Width : {width}</h1>
        </div>
    )
}

export default WindowTracker

