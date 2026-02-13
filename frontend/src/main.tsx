import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'

const route = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof route
  }
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
