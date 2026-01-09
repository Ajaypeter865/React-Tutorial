
import { Link } from "react-router-dom"

const Header = () => {


    return (
        <div className="header">
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to='/counter'>Counter</Link>
                    </li>
                    <li>
                        <Link to='/nameform'>Nameform</Link>

                    </li>
                    <li>
                        <Link to='/updatetitle'>Updatetitle</Link>

                    </li>
                    <li >
                        <Link to='/theme'>Theme</Link>

                    </li>
                    <li >
                        <Link to='/button'>button</Link>

                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header