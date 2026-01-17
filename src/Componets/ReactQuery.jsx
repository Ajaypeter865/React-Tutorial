
import { useQueryClient } from '@tanstack/react-query'

const Users = () => {

    const query = useQueryClient()

    const queryUser = query.getQueryData(['user']) ?? []
    console.log('Users =', queryUser);

    // const MapedUser = queryUser.map((user) => user.name)
    // console.log('MapedUser', MapedUser);


    return (
        <div>
            <h1>Query Users</h1>

            <table className='user-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {queryUser.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )

}

export default Users