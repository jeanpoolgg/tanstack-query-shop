import { productsApi } from "../api/productsApi";
import { type Product } from "../interfaces/product";

interface GetProductsOptions {
    filterKey?: string;
}

export const getProducts = async({ filterKey}: GetProductsOptions): Promise<Product[]> => {

    const filterUrl = filterKey ? `category=${filterKey}` : '';
    console.log(filterUrl);

    const { data } = await productsApi.get<Product[]>(`/products?${filterUrl}`);
    console.log(data);

    return data;

}

interface GetProductOptions {
    id?: number;
}

export const getProductById = async({id}: GetProductOptions): Promise<Product> => {

    const { data } = await productsApi.get<Product>(`/products/${id}`);
    return data;
}
