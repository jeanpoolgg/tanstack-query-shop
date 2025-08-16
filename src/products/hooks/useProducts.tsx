import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../services/actions"

interface Options {
    filterKey?: string;
}

export const useProducts = ({filterKey}: Options) => {
    console.log("Este es filterKey", filterKey)
    const productsQuery = useQuery({
        queryKey: ['products', {filterKey}],
        queryFn: () => getProducts({filterKey}),
        staleTime: 1000 * 60 * 60,
    })

    return {
        productsQuery
    }
}
