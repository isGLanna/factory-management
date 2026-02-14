import type { Product, ChangeProductConfigRequest } from "../../../types/product"
import axios from "axios"

const url = "http://localhost:8080/product"

export const getProducts = async (): Promise<Product[] | undefined> => {
  try {
    const response = await axios.get(`${url}`)

    return response.data
  } catch (error) {
    alert("Error fetching products")
    return undefined
  }
}

export const createProduct = async (productData: any) => {
  try {
    await axios.post(`${url}/products`, productData)
  } catch (error) {
    alert("Error creating product")
  }
}

export const updateProduct = async (name: string, configData: ChangeProductConfigRequest) => {
  try {
    const payload = {
      ...configData,
      name: name
    }
    const response = await axios.put(`${url}/relationship`, payload)
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