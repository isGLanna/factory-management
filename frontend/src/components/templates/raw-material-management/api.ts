import type { ChangeProductConfigRequest } from "../../../types/product"
import axios from "axios"
import type { RawMaterial } from "../../../types/raw-material"

const url = "http://localhost:8080/raw-material"

export const getMaterials = async (): Promise<RawMaterial[] | undefined> => {
  try {
    const response = await axios.get(`${url}`)

    return response.data
  } catch (error) {
    alert("Error fetching products")
    return undefined
  }
}

export const createMaterial = async (materialData: RawMaterial) => {
  try {
    await axios.post(`${url}`, materialData)
  } catch (error) {
    alert("Error creating product")
  }
}

export const requestReplacement = async (materialData: RawMaterial) => {
  try {
    const response = await axios.patch(`${url}/`, materialData)
    return response.data
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