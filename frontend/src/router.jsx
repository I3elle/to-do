import { createBrowserRouter } from 'react-router-dom'

import { lazy } from 'react'

const Initial = lazy(()=>import('./components/pages/initial/initial'))
const NotFound404 = lazy(()=>import('./components/pages/404/NotFound'))

const isAuthenticated = false

const not_authenticated= [
    {
        path:"/",
        element: <Initial />,
        errorElement: <NotFound404 />
    },
    {
        path:"sing-in/"
        
    },
    {
        path:"register/"
    }

]

const authenticated = [

]

export const router = createBrowserRouter(isAuthenticated ? authenticated : not_authenticated)



