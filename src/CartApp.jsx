import { CatalogView } from './components/CatalogView';
import { ShoppingCart } from './components/ShoppingCart';

import { useState } from "react"

const initialCartItems = [
    //  {
    // product: {
    //     id: 0,
    //     name: '',
    //     description: '',
    //     price: 0

    // },
    // quantity: 0,
    // total: 0
    //}
]
export const CartApp = () => {


    const [cartItems, setCartItems] = useState(initialCartItems)

    const handlerDeleteItem = (id, name, price, quantity) => {
        const discardItemsDeleted = cartItems.filter(item => item.product.id !== id)
        setCartItems(discardItemsDeleted)
    }




    const handlerAddItem = (item) => {
        const existItem = cartItems.find(cartItem => cartItem.product.id === item.id)

        if (existItem) {
            const updateItem = cartItems.map(data => {
                if (data.product.id === item.id) {
                    const newQuantity = data.quantity + 1
                    return {
                        ...data,
                        quantity: newQuantity,
                        total: newQuantity * item.price
                    }
                }
                return data

            });
            setCartItems(updateItem)

        } else {
            setCartItems([...cartItems,
            {
                product: item,
                quantity: 1,
                total: item.price * 1
            }]
            )
        }
    }

    return (
        <>
            <div className='container'>
                <h1> Cart App</h1>
                <CatalogView handler={product => handlerAddItem(product)} />

                {cartItems.length > 0 && <div className="my-4 w-50">
                    <ShoppingCart items={cartItems} handlerDeleteItem={(id, name, price, quantity) => handlerDeleteItem(id, name, price, quantity)} />
                </div>
                }
            </div>
        </>
    )
}