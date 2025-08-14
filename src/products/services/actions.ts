import { productsApi } from "../api/productsApi";
import { type Product } from "../interfaces/product";

interface GetProductsOptions {
    filterKey?: string;
}

export const getProducts = async({ filterKey}: GetProductsOptions) => {

    const filterUrl = filterKey ? `category=${filterKey}` : '';
    console.log(filterUrl);

    const { data } = await productsApi.get<Product[]>(`/products?${filterUrl}`);
    console.log(data);

    return data;

}