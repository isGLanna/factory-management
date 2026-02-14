import type { Product } from "../../../../types/product"

interface Props {
  product: Product
  setCreateProduct: (product: Product | null) => void
}

export function UpdateProduct({ product }: Props) {
  return (
    <>
      <h3>Configurar Produto</h3>

      <div>
        <p>Informações do produto: 
          <input type="text" placeholder="Preencha o nome" value={product.name}/>
          <input type="text" name="" id="" value={product.stock}/>
          <input type="text" name="" id="" value={product.price}/>
          </p>
      </div>
    </>
  )
}