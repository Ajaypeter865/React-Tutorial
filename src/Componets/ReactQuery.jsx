
import {useQueryClient} from '@tanstack/react-query'

const Users = () => {

    const user = useQueryClient(['user'])
    console.log('Users =', user);

    return (
        <div>
            <h1>Query Users</h1>
            <ul>{user.map((user) => )}</ul>
        </div>
    )
    
}

export default Users