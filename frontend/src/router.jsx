import { createBrowserRouter } from 'react-router-dom'

import { lazy } from 'react'

const Initial = lazy(()=>import('./components/pages/initial/initial'))

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Initial />
    }
])
