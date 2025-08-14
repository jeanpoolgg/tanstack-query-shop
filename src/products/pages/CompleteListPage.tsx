
import { ProductList } from "../components/ProductList";
import { useProducts } from "../hooks/useProducts";

export const CompleteListPage = () => {


  const { productsQuery } = useProducts({});

  const products = productsQuery.data || [];



  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>

      { productsQuery.isLoading && <p>Cargando...</p>}

      <ProductList products={products} />

    </div>
  )
}