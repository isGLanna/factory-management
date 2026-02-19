import { createFileRoute } from '@tanstack/react-router'
import { ProductionSugestion } from '../pages/production-sugestion'

export const Route = createFileRoute('/production-susgestion')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ProductionSugestion />
}
