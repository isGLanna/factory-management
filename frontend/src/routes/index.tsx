
import { createFileRoute } from '@tanstack/react-router'
import { ProductsManagement } from '../pages'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ProductsManagement />
}
