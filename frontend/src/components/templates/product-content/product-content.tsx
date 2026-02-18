import { useState, useEffect, useCallback, useRef } from "react"
import { getProducts, updateProduct, createProduct } from "./api"
import type { Product } from "../../../types/product"
import type { MaterialToProduce } from "../../../types/raw-material"
import { ListProducts } from "./sub-template/list-products"
import { Modal } from "../../molecules/modal/modal"
import { FormCreateProduct } from "./sub-template/create-product"
import { FormUpdateProduct } from './sub-template/update-product'
import "../../atoms/main-content-style.scss"

export function ProductContent() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [productNameEditing, setProductNameEditing] = useState<string>("")
  const [isCreatingProduct, setIsCreatingProduct] = useState<boolean>(false)
  const isFirstRender = useRef(true)      // Apenas para tratar problema em development

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
    if (isFirstRender.current) {
      fetchProducts()
      isFirstRender.current = false
    }
    
  }, [])

  const handleUpdateProduct = async (rawMaterials: MaterialToProduce[]) => {
    const productComposition = {
      name: productNameEditing,
      materials: rawMaterials
    }

    try {
      await updateProduct(productComposition)
      fetchProducts()
    } catch {
      alert("Falha ao atualizar o produto.")
    } finally {
      setProductNameEditing("")
    }
  }

  const handleCreateProduct = async (productComposition: Product & {materials: MaterialToProduce[]}) => {
    if (!isCreatingProduct) return

    productComposition.price = String(productComposition.price).replace(",", ".")

    try {
      await createProduct(productComposition)
      setIsCreatingProduct(false)
      fetchProducts()
    } catch (error) {
      alert("Não foi possível criar o produto")
    }
  }


  return (
    <main className="main-content">
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
          onClose={() => setProductNameEditing("")}>
          <FormUpdateProduct 
            productName={productNameEditing}
            onUpdate={handleUpdateProduct} 
            onClose={() => setProductNameEditing("")}/>
        </Modal>
      )}
    </main>
  )
}