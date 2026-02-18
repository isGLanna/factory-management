import type { Product } from "../../../types/product"
import type { MaterialToProduce } from "../../../types/raw-material"
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

export const createProduct = async (productData: Product & {materials: MaterialToProduce[]}) => {
  try {
    await axios.post(`${url}`, {...productData, price: parseFloat(productData.price)})
  } catch (error) {
      alert("Error creating product")
  }
}

export const updateProduct = async (configData: {name: string} & {materials: MaterialToProduce[]}) => {
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