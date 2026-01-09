import { useState, useContext, createContext } from "react";

const UserContext = createContext()

const LoginButton = () => {
    const [isLoggedIn, SetIsLoggedIn] = useState(false)
    return (
        <UserContext.Provider value={isLoggedIn}>
            <div className="login-btn">
                <button onClick={() => { SetIsLoggedIn(!isLoggedIn) }}>{isLoggedIn ? 'Logout' : 'Login'}</button>
            </div>
            <Profile />
        </UserContext.Provider>
    )
}

const Profile = () => {

    const isLoggedIn = useContext(UserContext)
    return (
        <div>
            <h1>{isLoggedIn ? 'Hello Ajay' : 'Please Login'}</h1>
        </div>
    )
}

export default LoginButton