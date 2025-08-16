import { useMutation } from "@tanstack/react-query";
import { productActions } from "..";

export const useProductMutation = () => {

    const productMutation = useMutation({
        mutationFn: productActions.createProduct,
        onSuccess: () => {
            console.log('Producto creado');
        }
    })
    return {
        productMutation
    }
}
