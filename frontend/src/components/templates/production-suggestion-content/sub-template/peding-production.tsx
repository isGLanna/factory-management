import type { ProductSuggestion } from "../../../../types/product-suggestions"
import { BsBoxArrowInRight } from "react-icons/bs"
import { produce } from './api'
import React from 'react'
import "../../../atoms/table-style.scss"
import "../../../atoms/button-style.scss"

interface PendingProductionProps {
  toProduce: ProductSuggestion[]
}

export const PendingProduction = React.memo(({toProduce}: PendingProductionProps) => {
  return (
    <div className="table-container">
      <header className="h-[36px] flex items-center justify-between">
        <h3>Encaminhar produção</h3>
        <button className="btn action"
          onClick={() => toProduce.forEach(product => produce(product.name, product.amount))}>
            Produzir
            <BsBoxArrowInRight />
        </button>
      </header>
      
      <table data-testid="pending-production-table">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Qtd.</th>
            <th>Preço</th>
            <th>Despesa</th>
          </tr>
        </thead>
        
        <tbody>
          {toProduce.length > 0 ? 
            (toProduce.map((product) => (
              <tr key={product.name}>
                <th>{product.name}</th>
                <th>{product.amount}</th>
                <th>{(product.profit/100).toFixed(2)}</th>
                <th>{(product.cost/100).toFixed(2)}</th>
              </tr>
          ))) : (
            <tr className="empty"><span>Fila de produção vazia</span></tr>
          )}
        </tbody>
      
        <tfoot>
          <tr>
            <th>Soma total</th>
            <th>{toProduce.reduce((sum, product) => sum + product.amount, 0)}</th>
            <th>{toProduce.reduce((sum, product) => sum + (product.profit/100), 0).toFixed(2)}</th>
            <th>{toProduce.reduce((sum, product) => sum + (product.cost/100), 0).toFixed(2)}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
})