import type { MaterialToProduce, RawMaterial } from "../../../../types/raw-material"
import { useState } from "react"
import "../../../molecules/modal/item-modal.scss"

interface Props {
  rawMaterial: RawMaterial
  onReplenish: (material: MaterialToProduce) => void
  onClose: () => void
}

export function FormReplenishMaterial({ rawMaterial, onReplenish, onClose }: Props) {
  const [ replenishMaterial, setReplenishMaterial ] = useState({
    amount: 0,
    price: 0
  })

  const updateItem = (field: keyof MaterialToProduce, value: string | number) => {
    setReplenishMaterial({ ...replenishMaterial, [field]: value })
  }

  return (
    <form className="item-form-modal flex flex-col gap-4" onSubmit={() => onReplenish({ name: rawMaterial.name, ...replenishMaterial})}>

      <div>
        <h3>Configuração do material</h3>
        <hr />
      </div>
      <p>Informações do material: </p>

      <div className="flex flex-row items-center gap-4">
        <label htmlFor="name">Material <strong>{rawMaterial.name}</strong>:</label>
      </div>

      <div className="flex flex-row items-center gap-4">
        <label htmlFor="stock">Repor estoque:</label>
        <input id="stock" name="estoque" type="text" 
            value={replenishMaterial.amount} 
            onChange={e => updateItem("amount", Number(e.target.value))}
          />
      </div>

      <div className="flex flex-row items-center gap-4">
        <label htmlFor="price">Preço unitário:</label>
        <input id="price" name="price" type="text"
            inputMode="numeric"
            value={(replenishMaterial.price/100).toFixed(2)}
            onChange={e => {
              const onlyNumbers = e.target.value.replace(/\D/g, "")
              const valueInCents = Number(onlyNumbers)
              updateItem("price", valueInCents)}}
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