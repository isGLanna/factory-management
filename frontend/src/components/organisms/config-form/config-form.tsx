import { useState } from "react"
import type { ChangeProductConfigRequest, ProductMaterialRequest } from "../../../types/product"
import { CiTrash } from "react-icons/ci";
import "./config-form.scss"

interface Props {
  product: string
  children: React.ReactNode
  onClose: () => void
  onSave: (data: ChangeProductConfigRequest) => void
}

export function ConfigForm({ product, children, onClose, onSave }: Props) {
  const [config, setConfig] = useState<ChangeProductConfigRequest>({
    name: product,
    materials: []
  })

  const updateItem = (index: number, field: keyof ProductMaterialRequest, value: string | number) => {
    const newMaterials = [...config.materials]
    newMaterials[index] = { ...newMaterials[index], [field]: value }
    setConfig({ ...config, materials: newMaterials })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}

        <div>
          <label>Materiais ({config.materials.length})</label>
          <div className="materials-list">
            {config.materials.map((m, i) => (
              <div key={i} className="row">
                <input 
                  placeholder="Nome do material" 
                  value={m.name} 
                  onChange={e => updateItem(i, 'name', e.target.value)} 
                />
                <input 
                  type="number" 
                  min="1"
                  value={m.amount} 
                  onChange={e => updateItem(i, 'amount', Number(e.target.value))} 
                />
                <button onClick={() => setConfig({ ...config, materials: config.materials.filter((_, idx) => idx !== i) })}>
                  <CiTrash size={20}/>
                </button>
              </div>
            ))}
          </div>
        </div>

        <button className="btn-add" onClick={() => setConfig({ ...config, materials: [...config.materials, { name: "", amount: 1 }] })}>
          Adicionar Material
        </button>

        <div className="actions">
          <button className="btn-cancel" onClick={onClose}>Cancelar</button>
          <button className="btn-save" onClick={() => onSave(config)}>Salvar</button>
        </div>
      </div>
    </div>
  )
}