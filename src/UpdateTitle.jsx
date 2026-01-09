
import { useEffect, useState } from "react"


const UpdateTitle = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        fetchData()
    }, [])
    

    const fetchData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await data.json()
        console.log(json);
        setUser(json)
    }

    return (
        <div>
            <h3><ul>
                name : {user.map(user => <li>{ user.name}</li>)}</ul></h3>
        </div>
    )
}


export default UpdateTitle