import { ProductionAdvisor } from "./sub-template/production-advisor"
import { PendingProduction } from "./sub-template/peding-production"

import "../../atoms/main-content-style.scss"

export function ProductionSuggestionContent() {
  return (
    <div className="main-content flex flex-col w-full h-full">
      <header>
        <h1>Recomendações de Produção</h1>
      </header>
      <hr className="p-2"/>
      
      <main className="flex flex-col gap-4 w-full h-full gap-2 lg:flex-row">
        <ProductionAdvisor />
        <PendingProduction />
      </main>
    </div>
  )
}