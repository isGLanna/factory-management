import { ProductionAdvisor } from "./sub-template/production-advisor"
import { PendingProduction } from "./sub-template/peding-production"

import "../../atoms/main-content-style.scss"

export function ProductionSugestionContent() {
  return (
    <div className="main-content flex flex-row w-full h-full gap-4">
      <ProductionAdvisor />
      <PendingProduction />
    </div>
  )
}