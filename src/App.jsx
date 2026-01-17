import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import Header from './Componets/Header'
import Counter from './Componets/Counter'
import NameForm from './Componets/NameForm'
import ThemeSwitcher from './Componets/Theme'
import UpdateTitle from './Componets/UpdateTitle'
import Error from './Componets/Error'
import LoginButton from './Componets/LoginButton'
import UseContext from './Componets/LanguageSwitch'
import CounterReducer from './Componets/CounterReducer'
import SquareMemo from './Componets/Memo'
import FocusInput from './Componets/UseRef'
import FinalComponet from './Componets/HOC2'
import WindowTracker from './Componets/CustomHook'
import ReactQuery from './ReactQuery/ReactQuery'
// import ReactQuery from './Componets/ReactQuery'

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
    errorElement: <Error />,

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
      {
        path: '/usecontext',
        element: <UseContext />
      },
      {
        path: '/reducer',
        element: <CounterReducer />
      },
      {
        path: '/memo',
        element: <SquareMemo />
      },
      {
        path: '/useref',
        element: <FocusInput />
      },
      {
        path: '/hoc',
        element: <FinalComponet />
      },
      {
        path: '/customhooks',
        element: <WindowTracker />
      },
        {
        path: '/reactquery',
        element: <ReactQuery />
      },
    ]
  }
])

const App = () => {
  return <RouterProvider router={appRouter} />
}

export default App
