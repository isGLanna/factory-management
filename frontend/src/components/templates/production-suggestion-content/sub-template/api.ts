import type { ProductSuggestion } from "../../../../types/product-suggestions";

const url = "http://localhost:8080"
const header = { "Content-Type": "application/json" }

export async function fetchProductionSuggestions(): Promise<ProductSuggestion[] | []> {
  try {
    const response = await fetch(`${url}/production-suggestion`)

    if (!response.ok) throw new Error("Failed to fetch production suggestions")

      return response.json()
  } catch (error) {
    return []
  }
}

export async function maxProductionAmount(productName: string): Promise<ProductSuggestion | null> {
  try {
    const response = await fetch(`${url}/max-production?name=${encodeURIComponent(productName)}`)

    if (!response.ok) throw new Error("Falha ao calcular a quantidade máxima de produção")

    return response.json()
  } catch (error) {
    return null
  }
}