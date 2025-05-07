import { products } from "../data/products"


export const getProduct = () => {

    return products
}

export const calculateTotal = (items) => {
    items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
}