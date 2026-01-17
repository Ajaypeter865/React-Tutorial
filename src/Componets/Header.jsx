
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
                    <li >
                        <Link to='/usecontext'>useContext</Link>

                    </li>
                    <li >
                        <Link to='/reducer'>Reducer</Link>

                    </li>
                    <li >
                        <Link to='/memo'>Memo</Link>

                    </li>
                    <li >
                        <Link to='/useref'>Use Ref</Link>

                    </li>
                    <li >
                        <Link to='/hoc'>Hoc</Link>

                    </li>
                    <li >
                        <Link to='/customhooks'>Custom Hooks</Link>

                    </li>
                      <li >
                        <Link to='/reactquery'>React Query</Link>

                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header