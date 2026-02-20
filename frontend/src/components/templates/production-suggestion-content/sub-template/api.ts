import type { Product } from "../../../../types/product";
import type { MaterialToProduce } from "../../../../types/raw-material";

const url = "http://localhost:3000/api"
const header = "Content-Type: application/json"

export async function fetchProductionSuggestions(): Promise<Array<Product & { materials: MaterialToProduce[] }>> {
  try {
    const response = await fetch(`${url}/production-suggestion`)

    if (!response.ok) throw new Error("Failed to fetch production suggestions")

      return response.json()
  } catch (error) {
    return []
  }
}

export async function maxProductionAmount(productName: string): Promise<void> {
  try {
    const response = await fetch(`${url}/max-production`)
  } catch (error) {
    return
  }
}