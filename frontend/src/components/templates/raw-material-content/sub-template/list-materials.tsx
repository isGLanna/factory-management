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
      <Card title={material.name} type="material" onEdit={() => setMaterialNameReplenishing(material.name)}>
        <p><strong>Estoque: </strong>{material.amount}</p>
      </ Card>
    ))
  ), [materials])

  return materialsList
}