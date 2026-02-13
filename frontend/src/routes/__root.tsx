import { RootLayout } from '../pages'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {

  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  )
}