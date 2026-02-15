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

export const createProduct = async (productData: ChangeProductConfigRequest) => {
  try {
    await axios.post(`${url}`, {...productData, price: parseFloat(productData.price)})
  } catch (error) {
      alert("Error creating product")
  }
}

export const updateProduct = async (configData: ChangeProductConfigRequest) => {
  try {
    const response = await axios.patch(`${url}/relationship`, configData)
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