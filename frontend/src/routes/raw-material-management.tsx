import { createFileRoute } from '@tanstack/react-router'
import { RawMaterialManagement } from '../pages/raw-material-management'

export const Route = createFileRoute('/raw-material-management')({
  component: RouteComponent,
})

function RouteComponent() {
  return <RawMaterialManagement />
}
