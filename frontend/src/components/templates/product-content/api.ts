import type { Product } from "../../../types/product"
import type { MaterialToProduce } from "../../../types/raw-material"
import axios from "axios"

const url = "http://localhost:8080/product"
const header = { "Content-Type": "application/json"}

export const getProducts = async (): Promise<Array<Product & {materials: MaterialToProduce[]}> | null> => {
  try {
    const response = await fetch(url)

    return response.json()
  } catch (error) {
    alert("Error fetching products")
    return null
  }
}

export const createProduct = async (productData: Product & {materials: MaterialToProduce[]}) => {
  try {
    await fetch(url, {
      method: "POST",
      headers: header,
      body: JSON.stringify({ ...productData, price: parseFloat(productData.price)})
    })
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