import type { RawMaterial, MaterialToReplenish } from "../../../types/raw-material"
import axios from "axios"

const url = "http://localhost:8080/raw-material"

export const getMaterials = async (): Promise<RawMaterial[] | undefined> => {
  try {
    const response = await fetch(url)

    return response.json()
  } catch (error) {
    alert("Error fetching products")
    return undefined
  }
}

export const createMaterial = async (materialData: RawMaterial) => {
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
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

  alert(formattedMaterialData.amount)

  try {
    await fetch(`${url}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(formattedMaterialData)
    })
  } catch (error) {
    alert("Error updating product")
  }
}

export const produceProduct = async (name: string) => {
  try {
    await axios.post(`${url}/produce`, { name })
  } catch (error) {
    alert("Error producing product")
  }
}