import type { MaterialToProduce } from "../../../../types/raw-material"
import { useState } from "react"
import { CiTrash } from "react-icons/ci"
import "./item-modal.scss"

interface Props {
  productName: string
  onUpdate: (materials: MaterialToProduce[]) => void
  onClose: () => void
}

export function FormCreateProduct({ productName, onUpdate, onClose }: Props) {
  const [ rawMaterial, setRawMaterial ] = useState<{materials: MaterialToProduce[]}> ({
    materials: [{ name: "", amount: 0 }]
  }) 

  const updateItem = (index: number, field: keyof MaterialToProduce, value: string | number) => {
    const newMaterials = [...rawMaterial.materials]
    newMaterials[index] = { ...newMaterials[index], [field]: value }
    setRawMaterial({ ...rawMaterial, materials: newMaterials })
  }


  return (
    <form className="item-form-modal flex flex-col gap-4" onSubmit={() => onUpdate(rawMaterial)}>

      <h3>Configuração do produto</h3>
      <p>Matéria prima de {productName}: </p>

      <div>
        <label>Materiais ({rawMaterial.materials.length})</label>
        <div className="materials-list">
          {rawMaterial.materials.map((m, i) => (
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
              <button className="btn-delete" type="button" onClick={() => setRawMaterial({ ...rawMaterial.filter((_, idx) => idx !== i) })}>
                <CiTrash size={20}/>
              </button>
            </div>
          ))}
        </div>
      </div>

      <button className="btn-add" type="button" onClick={() => setRawMaterial({...rawMaterial.materials, {name: "", amount: 0 })}>
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