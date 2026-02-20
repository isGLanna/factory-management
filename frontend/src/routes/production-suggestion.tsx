import { createFileRoute } from '@tanstack/react-router'
import { ProductionSuggestion } from '../pages/production-suggestion'

export const Route = createFileRoute('/production-suggestion')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ProductionSuggestion />
}
