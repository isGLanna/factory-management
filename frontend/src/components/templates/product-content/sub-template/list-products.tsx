import { useMemo } from "react"
import { Card } from "../../../molecules/card/card"
import type { Product } from "../../../../types/product"

interface Props {
  productsComposition: Array<Product & { materials: { name: string, amount: number, pricePerUnit: string}[]}>
  setProductNameEditing: (setProductNameEditing: string) => void
}

export function ListProducts({ productsComposition, setProductNameEditing }: Props) {


  const productList = useMemo(() => (
    productsComposition.map((product) => (
      <Card title={product.name} type="product" onEdit={() => setProductNameEditing(product.name)}>
        <div>  
          <p><strong>Estoque: </strong>{product.amount}</p>
          <p><strong>Preço: </strong>{product.price}</p>
        </div>

        <hr />

        <div>
            <table className="table-auto w-full text-left">
              <thead className="font-medium">
                <tr className="border-b border-gray-300 ">
                  <th className="w-3/5">Materiais</th>
                  <th>Qtd.</th>
                  <th>$</th>
                </tr>
              </thead>
          {product.materials.slice(0, 3).map((material) => (
              <tbody>
                <tr>
                  <td className="px-2">{material.name}</td>
                  <td>{material.amount}</td>
                  <td>{material.pricePerUnit || "0.00"}</td>
                </tr>
              </tbody>
              ))}
            </table>
        </div>
      </Card>
    ))
  ), [productsComposition, setProductNameEditing])

  return productList;
};