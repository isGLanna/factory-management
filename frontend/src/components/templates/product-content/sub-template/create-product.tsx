import type { Product } from "../../../../types/product"
import type { MaterialToProduce } from "../../../../types/raw-material"
import { useState } from "react"
import { CiTrash } from "react-icons/ci"
import "./item-modal.scss"

interface Props {
  onCreate: (product: Product & { materials: MaterialToProduce[]}) => void
  onClose: () => void
}

export function FormCreateProduct({ onCreate, onClose }: Props) {
  const [ productComposition, setProductComposition ] = useState<Product & { materials: MaterialToProduce[] }> ({
    name: "",
    stock: 0,
    price: "0.00",
    materials: [{ name: "", amount: 0 }]
  }) 

  const updateItem = (index: number, field: keyof MaterialToProduce, value: string | number) => {
    const newMaterials = [...productComposition.materials]
    newMaterials[index] = { ...newMaterials[index], [field]: value }
    setProductComposition({ ...productComposition, materials: newMaterials })
  }


  return (
    <form className="item-form-modal flex flex-col gap-4" onSubmit={() => onCreate(productComposition)}>

      <h3>Configuração do produto</h3>
      <p>Informações do produto: </p>

      <div className="flex flex-row items-center gap-4">
        <label htmlFor="name">Produto:</label>
        <input id="name" name="name" type="text" value={productComposition.name} placeholder="Nome do produto"
          onChange={e => setProductComposition({ ...productComposition, name: e.target.value })}
        />
      </div>

      <div className="flex flex-row items-center gap-4">
        <label htmlFor="stock">Estoque:</label>
        <input id="stock" name="estoque" type="text" 
            value={productComposition.stock} 
            onChange={e => setProductComposition({ ...productComposition, stock: Number(e.target.value) })}
          />

        <label htmlFor="price">Preço:</label>
        <input id="price" name="preço" type="text" 
          value={productComposition.price}
          onChange={e => setProductComposition({ ...productComposition, price: e.target.value })}
        />
      </div>

      <div>
        <label>Materiais ({productComposition.materials.length})</label>
        <div className="materials-list">
          {productComposition.materials.map((m, i) => (
            <div key={i} className="row">
              <input 
                placeholder="Nome do material" 
                value={m.name} 
                onChange={e => updateItem(i, 'name', e.target.value)} 
              />
              <input 
                type="number" 
                value={m.amount} 
                onChange={e => updateItem(i, 'amount', Number(e.target.value))} 
              />
              <button className="btn-delete" type="button" onClick={() => setProductComposition({ ...productComposition, materials: productComposition.materials.filter((_, idx) => idx !== i) })}>
                <CiTrash size={20}/>
              </button>
            </div>
          ))}
        </div>
      </div>

      <button className="btn-add" type="button" onClick={() => setProductComposition({ ...productComposition, materials: [...productComposition.materials, {name: "", amount: 0}] })}>
          Adicionar material
      </button>

      <hr />

      <div className="flex flex-row justify-end gap-2">
        <button className="btn-cancel" onClick={onClose}> Cancelar </button>
        <button className="btn-save"   type="submit"> Salvar </button>
      </div>
    </form>
  )
}