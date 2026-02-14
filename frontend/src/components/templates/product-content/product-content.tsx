import { useState, useEffect, useCallback, useMemo } from "react"
import "./product.scss"
import { getProducts, updateProduct } from "./api"
import type { Product, ChangeProductConfigRequest } from "../../../types/product"
import { Card } from "../../organisms/card/card"
import { ConfigForm } from "../../organisms/config-form/config-form"

export function ProductContent() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

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

  const productList = useMemo(() => (
    products.map((product) => (
      <div 
        key={product.name}
        className="cursor-pointer hover:opacity-80 transition-opacity"
      >
        <Card product={product} onEdit={setEditingProduct} />
      </div>
    ))
  ), [products])

  return (
    <main className="product-content">
      <h1>Produtos</h1>

      <hr className="p-2"/>

      <section className="flex flex-wrap gap-4">
        {loading ? <p>Carregando...</p> : productList}
      </section>

      {editingProduct && (
        <ConfigForm 
          product={editingProduct.name}
          onClose={() => setEditingProduct(null)}
          onSave={handleSave}
        />
      )}
    </main>
  )
}