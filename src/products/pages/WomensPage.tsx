import { ProductList } from "../components/ProductList";
import { useProducts } from "../hooks/useProducts";

export const WomensPage = () => {

  const { productsQuery } = useProducts({filterKey: "women's clothing"});

  const products = productsQuery.data || [];


  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>

      {productsQuery.isLoading && <p>Cargando...</p>}

      <ProductList products={products} />

    </div>
  )
}