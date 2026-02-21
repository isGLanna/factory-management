import type { ProductSuggestion } from "../../../types/product-suggestions"
import { ProductionAdvisor } from "./sub-template/production-advisor"
import { PendingProduction } from "./sub-template/peding-production"
import { useState } from 'react'

import "../../atoms/main-content-style.scss"

export function ProductionSuggestionContent() {
  const [ toProduce, setToProduce ] = useState<ProductSuggestion[]>([])

  const includeProductToProduce = (product: ProductSuggestion) => {
    if (toProduce.some(p => p.name === product.name)) {
      return
    }
    setToProduce(prev => [...prev, product])
  }

  return (
    <div className="main-content flex flex-col w-full h-full">
      <header>
        <h1>Recomendações de Produção</h1>
      </header>
      <hr className="p-2"/>
      
      <main className="flex flex-col gap-4 w-full h-full gap-2 lg:flex-row">
        <ProductionAdvisor setToProduce={includeProductToProduce} />
        <PendingProduction toProduce={toProduce} />
      </main>
    </div>
  )
}