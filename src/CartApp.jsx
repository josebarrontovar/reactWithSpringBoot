import { CatalogView } from './components/CatalogView';
import { ShoppingCart } from './components/ShoppingCart';
import { itemsReducer } from './reducer/ItemsReducer';
import { useReducer,useEffect } from "react"

const initialCartItems = sessionStorage.getItem('products') ? JSON.parse(sessionStorage.getItem('products')) : []
export const CartApp = () => {


    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems)


    useEffect(() => {
        sessionStorage.setItem('products', JSON.stringify(cartItems))
    }, [cartItems])


    const handlerDeleteItem = (id, name, price, quantity) => {
        console.log('ID Delete: '+id)
        dispatch({ type: 'DeleteItem', payload: id })
    }


    const handlerAddItem = (item) => {
        const existItem = cartItems.find(cartItem => cartItem.product.id === item.id)

        if (existItem) {
            dispatch({ type: "UpdateItem", payload: item })
        } else {
            dispatch({ type: "AddItem", payload: item })
        }
    }

    return (
        <>
            <div className='container'>
                <h1> Cart App</h1>
                <CatalogView handler={product => handlerAddItem(product)} />
                {console.log('TEST: '+cartItems.length)}
                {cartItems.length > 0 && <div className="my-4 w-50">
                    <ShoppingCart items={cartItems} handlerDeleteItem={(id, name, price, quantity) => handlerDeleteItem(id, name, price, quantity)} />
                </div>
                }
            </div>
        </>
    )
}