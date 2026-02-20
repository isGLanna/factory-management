import type { MaterialToProduce } from "../../../../types/raw-material"
import { useState } from "react"
import { CiTrash } from "react-icons/ci"
import "../../../molecules/modal/item-modal.scss"

interface Props {
  productName: string
  onUpdate: (materials: MaterialToProduce[]) => void
  onClose: () => void
}

export function FormUpdateProduct({ productName, onUpdate, onClose }: Props) {
  const [ rawMaterials, setRawMaterials ] = useState<MaterialToProduce[]> (
    [{ name: "", amount: 0, price: 0 }]
  ) 

  const updateItem = (index: number, field: keyof MaterialToProduce, value: string | number) => {
    const newMaterials = [...rawMaterials]
    newMaterials[index] = { ...newMaterials[index], [field]: value }
    setRawMaterials(newMaterials)
  }


  return (
    <form className="item-form-modal flex flex-col gap-4" onSubmit={() => onUpdate(rawMaterials)}>

      <h3>Configuração do produto</h3>
      <p>Matéria prima de <strong>{productName}</strong>: </p>

      <div>
        <label>Materiais ({rawMaterials.length})</label>
        <div className="materials-list">
          {rawMaterials.map((material, i) => (
            <div key={i} className="row">
              <input 
                placeholder="Nome do material" 
                value={material.name}
                onChange={e => updateItem(i, 'name', e.target.value)} 
              />
              <input 
                type="number"
                value={material.amount}
                onChange={e => updateItem(i, 'amount', Number(e.target.value))} 
              />
              <button className="btn-delete" type="button" onClick={() => setRawMaterials(rawMaterials.filter((_, idx) => idx !== i) )}>
                <CiTrash size={20}/>
              </button>
            </div>
          ))}
        </div>
      </div>

      <button className="btn-add" type="button" onClick={() => setRawMaterials([...rawMaterials, {name: "", amount: 0, price: 0 }])}>
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