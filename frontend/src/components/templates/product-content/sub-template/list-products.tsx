import { useMemo } from "react"
import { Card } from "../../../organisms/card/card"
import type { Product } from "../../../../types/product"

interface Props {
  products: Product[]
  setEditingProduct: (product: Product | null) => void
}

export function ListProducts({ products, setEditingProduct }: Props) {
  const productList = useMemo(() => (
    products.map((product) => (
      <div
        className="cursor-pointer hover:opacity-80 transition-opacity"
        key={product.name}>
        <Card item={product} title={product.name} onEdit={setEditingProduct}>
          <p><strong>Estoque: </strong>{product.stock}</p>
          <p><strong>Preço: </strong>{product.price}</p>
        </Card>
      </div>
    ))
  ), [products])

  return productList;
};