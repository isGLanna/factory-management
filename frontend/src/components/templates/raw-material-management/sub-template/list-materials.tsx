import { useMemo } from 'react'
import type { RawMaterial } from "../../../../types/raw-material"
import { Card } from "../../../molecules/card/card"


interface MaterialProps {
  materials: RawMaterial[]
  setMaterialNameReplenishing: (material: string | null) => void
}

export function ListMaterials({ materials, setMaterialNameReplenishing }: MaterialProps) {
  const materialsList = useMemo(() => (
    materials.map((material) => (
      <div
        className="cursor-pointer hover:opacity-80 transition-opacity"
        key={material.name}>
        <Card title={material.name} onEdit={() => setMaterialNameReplenishing(material.name)}>
          <p><strong>Estoque: </strong>{material.amount}</p>
        </ Card>
      </div>
    ))
  ), [materials])

  return materialsList
}