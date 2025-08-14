import { useQuery } from "@tanstack/react-query"
import { getProductById } from "../services/actions"

interface Options {
    id: number;
}

export const useProduct = ({id}: Options) => {
  
    const productQuery = useQuery({
        queryKey: ['product', {id}],
        queryFn: () => getProductById({id}),
        staleTime: 1000 * 60 * 60,
    })

    return {
        productQuery
    }
}
