export interface RawMaterial {
  name: string
  amount: number
}

export interface MaterialToProduce {
  name: string
  amount: number
}

export interface MaterialToReplenish {
  name: string,
  amount: number,
  pricePerUnit: string
}