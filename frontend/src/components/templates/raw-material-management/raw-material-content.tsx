import { useState, useEffect, useCallback, useMemo } from "react"
import "./product.scss"
import { getMaterials, requestReplacement} from "./api"
import type { ChangeProductConfigRequest } from "../../../types/product"
import type { RawMaterial } from '../../../types/raw-material'
import { Card } from "../../organisms/card/card"
import { ConfigForm } from "../../organisms/config-form/config-form"

export function RawMaterialContent() {
  const [materials, setMaterials] = useState<RawMaterial[]>([])
  const [loading, setLoading] = useState(false)
  const [editingMaterial, setEditingMaterial] = useState<RawMaterial | null>(null)

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    try {
      const data = await getMaterials()
      if (data) setMaterials(data)
    } catch {
      alert("Error fetching products")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const handleSave = useCallback(async (material: RawMaterial) => {
    if (!editingMaterial) return

    try {
      await requestReplacement(material)
      setEditingMaterial(null)
      fetchProducts()
    } catch {
      alert("Error updating config")
    }
  }, [editingMaterial, fetchProducts])

  const materialsList = useMemo(() => (
    materials.map((material) => (
      <div
        className="cursor-pointer hover:opacity-80 transition-opacity"
        key={material.name}>
        <Card item={material} title={material.name} onEdit={setEditingMaterial}>
          <p><strong>Estoque: </strong>{material.stock}</p>
        </ Card>
      </div>
    ))
  ), [materials])

  return (
    <main className="product-content">
      <h1>Matéria prima</h1>

      <hr className="p-2"/>

      <section className="flex flex-wrap gap-4">
        {loading ? <p>Carregando...</p> : materialsList}
      </section>
    </main>
  )
}