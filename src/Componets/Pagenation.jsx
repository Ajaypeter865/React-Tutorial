import { useState } from "react"

const items = Array.from({ length: 50 }, (_, i) => { return i + 1 })


const PaginationDemo = () => {

    const [page, setPage] = useState(2)

    const pageSize = 10

    const startIndex = (page - 1) * pageSize
    console.log('Start index =', startIndex);

    const currentPage = items.slice(startIndex, startIndex + pageSize)
    console.log('current page =', currentPage);




    return (

        <div>
            <ul>
                {currentPage.map(page => <li key={page}>{page}</li>)}
            </ul>

            <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
            <button disabled={page === Math.ceil(items.length / pageSize)} onClick={() => setPage(page + 1)}>Next</button>
        </div>

    )


}


export default PaginationDemo