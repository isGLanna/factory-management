import { useMemo } from "react"
import { Card } from "../../../organisms/card/card"
import type { Product } from "../../../../types/product"

interface Props {
  products: Product[]
  setIsEditing: (setIsEditing: boolean) => void
}

export function ListProducts({ products, setIsEditing }: Props) {
  const productList = useMemo(() => (
    products.map((product) => (
      <div
        className="cursor-pointer hover:opacity-80 transition-opacity"
        key={product.name}>
        <Card title={product.name} setIsEditing={setIsEditing}>
          <p><strong>Estoque: </strong>{product.stock}</p>
          <p><strong>Preço: </strong>{product.price}</p>
        </Card>
      </div>
    ))
  ), [products])

  return productList;
};