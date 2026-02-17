import { useMemo } from "react"
import { Card } from "../../../organisms/card/card"
import type { Product } from "../../../../types/product"

interface Props {
  products: Product[]
  setProductNameEditing: (setProductNameEditing: string) => void
}

export function ListProducts({ products, setProductNameEditing }: Props) {


  const productList = useMemo(() => (
    products.map((product) => (
      <div
        key={product.name}>
        <Card title={product.name} onEdit={() => setProductNameEditing(product.name)}>
          <p><strong>Estoque: </strong>{product.stock}</p>
          <p><strong>Preço: </strong>{product.price}</p>
        </Card>
      </div>
    ))
  ), [products, setProductNameEditing])

  return productList;
};