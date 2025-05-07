import React, { useEffect, useState } from 'react'
import { calculateTotal } from '../service/productService'


export const ShoppingCart = ({ items, handlerDeleteItem }) => {



    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(
            calculateTotal(items)
        );
        sessionStorage.setItem('products', JSON.stringify(items))

    }, [items])

    const onDeleteItem = (product, quantity) => {
        handlerDeleteItem(product.id, product.name, product.price, quantity)
    }


    return (
        <>
            <h3>Carro de compra</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity * item.product.price}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => onDeleteItem(item.product, item.quantity)}>eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total </td>
                        <td colSpan="2" className="text-start fw-bold">{total}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}