import { useState, useEffect, useCallback } from "react"
import "./product.scss"
import { getProducts, updateProduct, createProduct } from "./api"
import type { Product, ChangeProductConfigRequest } from "../../../types/product"
import { ListProducts } from "./sub-template/list-products"
import { ConfigForm } from "../../organisms/config-form/config-form"
import { FormUpdateProduct } from "./sub-template/update-product"
import { FormCreateProduct } from "./sub-template/create-product"

export function ProductContent() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [creatingProduct, setCreatingProduct] = useState<ChangeProductConfigRequest | null>(null)

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    try {
      const data = await getProducts()
      if (data) setProducts(data)
    } catch {
      alert("Não foi possível consultar os produtos.")
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
      alert("Falha ao atualizar o produto.")
    }
  }, [editingProduct, fetchProducts])


  const handleCreate = useCallback(async (data: ChangeProductConfigRequest) => {
    if (!creatingProduct && data.price === undefined) return
      
    const formatteddata = data.price?.replace(",", ".")

    try {
      await createProduct(formatteddata)
      setCreatingProduct(null)
      fetchProducts()
    } catch (error) {
      alert("Não foi possível criar o produto")
    }
  }, [creatingProduct])



  return (
    <main className="product-content">
      <header className="flex flex-row justify-between">
        <h1>Produtos</h1>
        <button className="btn-add" onClick={() => setCreatingProduct({name: "", stock: 0, price: '0.0', materials: []})}>Incluir produto</button>
      </header>
      <hr className="p-2"/>

      <section className="flex flex-wrap gap-4">
        {loading ? <p>Carregando...</p> : <ListProducts products={products} setEditingProduct={setEditingProduct}/>}
      </section>

      {creatingProduct && (
        <ConfigForm 
          name={creatingProduct.name}
          onClose={() => setEditingProduct(null)}
          onSave={handleCreate}>
          <FormCreateProduct product={creatingProduct} setCreatingProduct={setCreatingProduct} />
        </ConfigForm>
      )}

      {editingProduct && (
        <ConfigForm 
          name={editingProduct.name}
          onClose={() => setEditingProduct(null)}
          onSave={handleSave}>
          <FormUpdateProduct name={editingProduct.name} />
        </ConfigForm>
      )}
    </main>
  )
}