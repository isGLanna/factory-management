import type { RawMaterial } from "../../../../types/raw-material"
import { useState } from "react"
import "../../../molecules/modal/item-modal.scss"
interface Props {
  onCreate: (material: RawMaterial) => void
  onClose: () => void
}

export function FormCreateMaterial({ onCreate, onClose }: Props) {
  const [ rawMaterial, setRawMaterial ] = useState<RawMaterial> ({
    name: "",
    amount: 0
  })

  const updateItem = (field: keyof RawMaterial, value: string | number) => {
    setRawMaterial({ ...rawMaterial, [field]: value })
  }

  return (
    <form className="item-form-modal flex flex-col gap-4" onSubmit={() => onCreate(rawMaterial)}>

      <h3>Configuração do produto</h3>
      <p>Informações do produto: </p>

      <div className="flex flex-row items-center gap-4">
        <label htmlFor="name">Produto:</label>
        <input id="name" name="name" type="text" value={rawMaterial.name} placeholder="Nome do produto"
          onChange={e => updateItem('name', e.target.value)}
        />
      </div>

      <div className="flex flex-row items-center gap-4">
        <label htmlFor="amount">Quantia:</label>
        <input id="amount" name="estoque" type="text" 
            value={rawMaterial.amount} 
            onChange={e => updateItem("amount", Number(e.target.value))}
          />
      </div>

      <hr />

      <div className="flex flex-row justify-end gap-2">
        <button className="btn-cancel" onClick={onClose}> Cancelar </button>
        <button className="btn-save"   type="submit"> Salvar </button>
      </div>
    </form>
  )
}