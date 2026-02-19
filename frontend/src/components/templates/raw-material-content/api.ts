import type { RawMaterial, MaterialToReplenish } from "../../../types/raw-material"

const url = "http://localhost:8080/raw-material"
const header = { "Content-Type": "application/json"}

export const getMaterials = async (): Promise<RawMaterial[]> => {
  try {
    const response = await fetch(url)

    return response.json()
  } catch (error) {
    alert("Error fetching products")
    return []
  }
}

export const createMaterial = async (materialData: RawMaterial) => {
  try {
    await fetch(url, {
      method: "POST",
      headers: header,
      body: JSON.stringify(materialData)
    })
  } catch (error) {
    alert("Error creating product")
  }
}

// Lembrar de adpatar função após definir sistema de preços, frete e recursos da empresa
export const requestReplacement = async (materialData: MaterialToReplenish) => {
  const formattedMaterialData: { name: string, amount: number } = {
    name: materialData.name,
    amount: materialData.amount
  }

  try {
    await fetch(`${url}`, {
      method: "PATCH",
      headers: header,
      body: JSON.stringify(formattedMaterialData)
    })
  } catch (error) {
    alert("Error updating product")
  }
}

export const produceProduct = async (name: string) => {
  try {
    await fetch(`${url}/produce`,
      {
        method: "POST",
        headers: header,
        body: JSON.stringify({ name })
      }
    )
  } catch (error) {
    alert("Error producing product")
  }
}