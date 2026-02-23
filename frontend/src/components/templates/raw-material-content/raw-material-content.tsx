import { useState, useEffect, useCallback, useRef } from "react"
import { getMaterials, createMaterial, requestReplacement, deleteMaterial } from "./api"
import type { RawMaterial, MaterialToProduce } from "../../../types/raw-material"
import { ListMaterials } from "./sub-template/list-materials"
import { Modal } from "../../molecules/modal/modal"
import { FormCreateMaterial } from "./sub-template/create-material"
import { FormReplenishMaterial } from "./sub-template/replenish-material"
import "../../atoms/main-content-style.scss"

export function RawMaterialContent() {
  const [materials, setMaterials] = useState<RawMaterial[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [materialNameReplenishing, setMaterialNameReplenishing] = useState<string | null>(null)
  const [isCreatingMaterial, setIsCreatingMaterial] = useState<boolean>(false)
  const isFirstRender = useRef(true)

  const fetchMaterials = useCallback(async () => {
    setIsLoading(true)
    try {
      const data = await getMaterials()
      if (data) setMaterials(data)
    } catch {
      alert("Não foi possível consultar as matérias-primas.")
    } finally {
      setIsLoading(false)
    }
  }, [setMaterials, setIsLoading])

  useEffect(() => {
    if (isFirstRender.current) {
      fetchMaterials()
      isFirstRender.current = false
    }
  }, [])

  const handleReplenishMaterial = async (material: MaterialToProduce) => {
    try {
      await requestReplacement(material)
      fetchMaterials()
    } catch (error) {
      alert("Falha ao repor estoque.")
    } finally {
      setMaterialNameReplenishing(null)
    }
  }

  const handleCreateMaterial = async (material: RawMaterial) => {
    if (!isCreatingMaterial) return

    try {
      await createMaterial(material)
      setIsCreatingMaterial(false)
      fetchMaterials()
    } catch (error) {
      alert("Não foi possível criar a matéria-prima")
    }
  }

  const handleDeleteMaterial = async(materialName: string) => {
    const success = await deleteMaterial(materialName)

    if (success)
      setMaterials(prev => prev.filter(m => m.name !== materialName))
  }

  return (
    <main className="main-content">
      <header className="flex flex-row justify-between">
        <h1>Matéria Prima</h1>
        <button className="btn-add" onClick={() => setIsCreatingMaterial(true)}>Incluir matéria-prima</button>
      </header>
      <hr className="p-2"/>

      <section className="flex flex-wrap gap-4">
        {isLoading ? 
          <p>Carregando...</p> : 
          <ListMaterials materials={materials} 
            setMaterialNameReplenishing={setMaterialNameReplenishing} 
            onDelete={handleDeleteMaterial}/>}
      </section>

      {isCreatingMaterial && (
        <Modal 
          onClose={() => setIsCreatingMaterial(false)}>
          <FormCreateMaterial 
            onCreate={handleCreateMaterial} 
            onClose={() => setIsCreatingMaterial(false)}/>
        </Modal>
      )}

      {materialNameReplenishing && (
        <Modal 
          onClose={() => setMaterialNameReplenishing("")}>
          <FormReplenishMaterial 
            rawMaterial={materials.find(m => m.name === materialNameReplenishing)!}
            onReplenish={handleReplenishMaterial} 
            onClose={() => setMaterialNameReplenishing("")}/>
        </Modal>
      )}
    </main>
  )
}