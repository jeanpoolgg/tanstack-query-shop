import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Product, productActions } from "..";

export const useProductMutation = () => {

    const queryClient = useQueryClient();

    const productMutation = useMutation({
        mutationFn: productActions.createProduct,
        onSuccess: (product) => {
            // queryClient.invalidateQueries({
            //     queryKey: ['products', {'filterKey': data.category}] // Tiene que tener el mismo nombre que aparece en useProducts
            // });

            queryClient.setQueryData<Product[]>(
                ['products', { filterKey: product.category }],
                (oldData) => {
                    if (!oldData) return [];
                    return [...oldData, product];
                }
            )
        }
    })
    return {
        productMutation
    }
}
