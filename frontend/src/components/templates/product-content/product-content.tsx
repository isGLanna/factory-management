import { useState, useEffect, useCallback, useMemo } from "react"
import "./product.scss"
import { getProducts, updateProduct } from "./api"
import type { Product, ChangeProductConfigRequest, CreateProductRequest } from "../../../types/product"
import { ListProducts } from "./sub-template/list-products"
import { ConfigForm } from "../../organisms/config-form/config-form"
import { UpdateProduct } from "./sub-template/update-product"

export function ProductContent() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [creatingProduct, setCreatingProduct] = useState<CreateProductRequest | null>(null)

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    try {
      const data = await getProducts()
      if (data) setProducts(data)
    } catch {
      alert("Error fetching products")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const handleSave = useCallback(async (data: ChangeProductConfigRequest) => {
    if (!editingProduct) return

    try {
      await updateProduct(data)
      setEditingProduct(null)
      fetchProducts()
    } catch {
      alert("Error updating config")
    }
  }, [editingProduct, fetchProducts])

  const createProduct = useCallback(() => {
    setCreatingProduct({ name: "", stock: 0, price: 0 , materials: []})
  }, [])



  return (
    <main className="product-content">
      <header className="flex flex-row justify-between">
        <h1>Produtos</h1>
        <button className="btn-add" onClick={() => createProduct}>Incluir produto</button>
      </header>
      <hr className="p-2"/>

      <section className="flex flex-wrap gap-4">
        {loading ? <p>Carregando...</p> : <ListProducts products={products} setEditingProduct={setEditingProduct}/>}
      </section>

      {creatingProduct && (
        <ConfigForm 
          product={creatingProduct.name}
          onClose={() => setEditingProduct(null)}
          onSave={handleSave}>
          <UpdateProduct name={creatingProduct.name} />
        </ConfigForm>
      )}

      {editingProduct && (
        <ConfigForm 
          product={editingProduct.name}
          onClose={() => setEditingProduct(null)}
          onSave={handleSave}>
          <UpdateProduct name={editingProduct.name} />
        </ConfigForm>
      )}
    </main>
  )
}