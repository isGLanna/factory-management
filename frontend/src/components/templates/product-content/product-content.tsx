import { useState, useEffect, useCallback } from "react"
import "./product.scss"
import { getProducts, updateProduct, createProduct } from "./api"
import type { Product, ProductMaterialRequest } from "../../../types/product"
import type { MaterialToProduce } from "../../../types/raw-material"
import { ListProducts } from "./sub-template/list-products"
import { Modal } from "../../molecules/modal/modal"
import { FormCreateProduct } from "./sub-template/create-product"

export function ProductContent() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [productNameEditing, setProductNameEditing] = useState<string>("")
  const [isCreatingProduct, setIsCreatingProduct] = useState<boolean>(false)

  const fetchProducts = useCallback(async () => {
    setIsLoading(true)
    try {
      const productList = await getProducts()
      if (productList) setProducts(productList)
    } catch {
      alert("Não foi possível consultar os produtos.")
    } finally {
      setIsLoading(false)
    }
  }, [ setProducts, setIsLoading ])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const handleUpdateProduct = useCallback(async (rawMaterial: MaterialToProduce[]) => {
    const productComposition: ProductMaterialRequest = {
      name: product
    }

    try {
      await updateProduct(productComposition)
      fetchProducts()
    } catch {
      alert("Falha ao atualizar o produto.")
    } finally {
      setIsEditingProduct(false)
    }
  }, [isEditingProduct, fetchProducts])

  const handleCreateProduct = useCallback(async (productComposition: Product & {materials: MaterialToProduce[]}) => {
    if (!isCreatingProduct) return

    productComposition.price = String(productComposition.price).replace(",", ".")

    try {
      await createProduct(productComposition)
      setIsCreatingProduct(false)
      fetchProducts()
    } catch (error) {
      alert("Não foi possível criar o produto")
    }
  }, [isCreatingProduct, fetchProducts])


  return (
    <main className="product-content">
      <header className="flex flex-row justify-between">
        <h1>Produtos</h1>
        <button className="btn-add" onClick={() => setIsCreatingProduct(true)}>Incluir produto</button>
      </header>
      <hr className="p-2"/>

      <section className="flex flex-wrap gap-4">
        {isLoading ? <p>Carregando...</p> : <ListProducts products={products} setProductNameEditing={setProductNameEditing} />}
      </section>

      {isCreatingProduct && (
        <Modal 
          onClose={() => setIsCreatingProduct(false)}>
          <FormCreateProduct onCreate={handleCreateProduct} onClose={() => setIsCreatingProduct(false)}/>
        </Modal>
      )}

      {productNameEditing && (
        <Modal 
          onClose={() => setProductNameEditing(false)}>
          <FormUpdateProduct products={products} onUpdate={handleUpdateProduct} />
        </Modal>
      )}
    </main>
  )
}