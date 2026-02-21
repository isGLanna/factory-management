import React, { useState } from 'react'
import type { ProductSuggestion } from "../../../../types/product-suggestions"
import { fetchProductionSuggestions, maxProductionAmount } from "./api"
import { SearchBar } from "../../../molecules/seach-bar/seach-bar"
import { IoIosArrowDroprightCircle } from "react-icons/io"
import "../../../atoms/button-style.scss"

interface productionAdvisorProps {
  setToProduce: (products: ProductSuggestion) => void
}

// Aplicar useMemo na função para recarregar somente quando algo mudar

export const ProductionAdvisor = React.memo(({setToProduce}: productionAdvisorProps) => {
  const [products, setProducts] = useState<ProductSuggestion[]>([])
  
  const handleSearch = async (description: string) => {
    try {
      const result = await maxProductionAmount(description)

      if (!result) {
        setProducts([])
        return
      }

      setProducts([result])
    } catch(error) {
      alert("Deu pau aqui.")
    }
  }

  const handleSuggestion = async () => {
    try {
      setProducts(await fetchProductionSuggestions())
    } catch(error) {
      alert("Não foi possível retornar sugestão.")
    }
  }

  return (
    <div className="table-container">
      <header className="flex flex-row justify-between gap-8">
        <button className="btn action" onClick={handleSuggestion}>Sugestão</button>
        <SearchBar action={(description) => handleSearch(description)} />
      </header>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Qtd.</th>
            <th>Lucro</th>
            <th>Custo</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ?
          (products.map((product) => (
            <tr key={product.name}>
              <th>{product.name}</th>
              <th>{product.amount}</th>
              <th>{(product.income/100).toFixed(2)}</th>
              <th>{(product.cost/100).toFixed(2)}</th>
              <th className="translate-x-[-15px] p-[0px]">
                <IoIosArrowDroprightCircle size={20} onClick={() => setToProduce(product)}/>
              </th>
            </tr>
          ))) : (
          <tr className="empty"><span>Nenhuma produto encontrado</span></tr>
          )}
        </tbody>
      </table>
    </div>
  )
})