import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productActions } from "..";

export const useProductMutation = () => {

    const queryClient = useQueryClient();

    const productMutation = useMutation({
        mutationFn: productActions.createProduct,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ['products', {'filterKey': data.category}] // Tiene que tener el mismo nombre que aparece en useProducts
            });
        }
    })
    return {
        productMutation
    }
}
