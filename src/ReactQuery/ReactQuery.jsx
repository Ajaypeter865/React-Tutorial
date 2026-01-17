import { useQuery } from '@tanstack/react-query'

const userList = () => {

    const { data , isLoading } = useQuery({

        queryKey: ['user'],
        queryFn: async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/users')

            const JsonData = await data.json()
            console.log('JsonData =', JsonData);

            return JsonData
        },

        enabled : true,

        if(isLoading) {
            return <h1>Loading User List</h1>
        }
    })

}



export default userList