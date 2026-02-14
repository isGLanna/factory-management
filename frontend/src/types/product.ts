export interface Product {
  name: string
  stock: number
  price: number
}

export interface ProductMaterialRequest {
  name: string;
  amount: number;
}

export interface ChangeProductConfigRequest {
  name: string;
  materials: ProductMaterialRequest[];
}

export interface CreateProductRequest {
  name: string;
  stock: number;
  price: number;
  materials: ProductMaterialRequest[];
}