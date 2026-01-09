import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import Header from './Componets/Header'
import Counter from './Componets/Counter'
import NameForm from './Componets/NameForm'
import ThemeSwitcher from './Componets/Theme'
import UpdateTitle from './Componets/UpdateTitle'
import Error from './Componets/Error'
import LoginButton from './Componets/LoginButton'


const AppLayout = () => {

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )

}


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement : <Error/>,

    children: [
  
      {
        path: '/counter',
        element: <Counter />
      },
      {
        path: '/nameform',
        element: <NameForm />
      },
      {
        path: '/theme',
        element: <ThemeSwitcher />
      },
      {
        path: '/updatetitle',
        element: <UpdateTitle />
      },
        {
        path: '/button',
        element: <LoginButton />
      },
    ]
  }
])

const App = () => {
 return <RouterProvider router={appRouter}/>
}

export default App
