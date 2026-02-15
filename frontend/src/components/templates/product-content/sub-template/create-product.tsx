import type { ChangeProductConfigRequest } from "../../../../types/product"
import "../../../organisms/config-form/config-form.scss"

interface Props {
  product: ChangeProductConfigRequest
  setCreatingProduct: (product: ChangeProductConfigRequest | null) => void
}

export function FormCreateProduct({ product, setCreatingProduct }: Props) {
  return (
    <>
      <h3>Configurar Produto</h3>

      <div className="flex flex-col gap-2">
        <p>Informações do produto: </p>

        <div className="flex flex-row items-center gap-4">
          <label htmlFor="name">Produto:</label>
          <input id="name" name="name" type="text" value={product.name} placeholder="Nome do produto"
            onChange={e => setCreatingProduct({ ...product, name: e.target.value } as ChangeProductConfigRequest)}
          />
        </div>

        <div className="flex flex-row items-center gap-4">
          <label htmlFor="stock">Estoque atual:</label>
          <input id="stock" name="estoque" type="text" 
              value={product.stock} 
              onChange={e => setCreatingProduct({ ...product, stock: Number(e.target.value) })}
            />

          <label htmlFor="price">Preço:</label>
          <input id="price" name="preço" type="text" 
            value={product.price}
            onChange={e => setCreatingProduct({ ...product, price: e.target.value })}
          />
        </div>
      </div>
    </>
  )
}