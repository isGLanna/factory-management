import type { Product } from "../../../types/product"
import type { MaterialToProduce } from "../../../types/raw-material"

const url = "http://localhost:8080/product"
const header = { "Content-Type": "application/json"}

export const getProducts = async (): Promise<Array<Product & {materials: MaterialToProduce[]}> | null> => {
  try {
    const response = await fetch(url)

    if (!response.ok) throw new Error("Erro ao buscar produtos")

    return response.json()
  } catch (error) {
    alert("Error fetching products")
    return null
  }
}

export const createProduct = async (productData: Product & {materials: MaterialToProduce[]}) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: header,
      body: JSON.stringify({ ...productData})
    })

    if (!response.ok) throw new Error("Erro ao criar produtos")
  } catch (error) {
      alert("Error creating product")
  }
}

export const updateProduct = async (configData: {name: string} & {materials: MaterialToProduce[]}) => {
  try {
    const response = await fetch(`${url}/relationship`, {
      method: "PATCH",
      headers: header,
      body: JSON.stringify({ ...configData})
    })

    if (!response.ok) throw new Error("Erro ao atualizar produto")

    return response.json()
  } catch (error) {
    alert("Error updating product")
  }
}

export const produceProduct = async (name: string, amount: number) => {
  try {
    await fetch(`${url}/produce`, {
      method: "PATCH",
      headers: header,
      body: JSON.stringify({ name, amount })
    })
  } catch (error) {
    alert("Error producing product")
  }
}

export const deleteProduct = async (name: string) => {
  try {
    const response = await fetch(`${url}/${name}`, {
      method: "DELETE",
    })

    if (!response.ok) throw new Error("Erro ao deletar")

    return true
  } catch (error) {
    alert("Error deleting product")
  }
}