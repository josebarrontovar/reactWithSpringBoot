import { useState,useEffect } from "react"



export const AddItem = ({handler}) => {

    const [invoiceItemState, setInvoiceItemState] = useState({
        productValue: '',
        priceValue: '0',
        quantityValue: '0',
        counter: 4
    })

    const { productValue, priceValue, quantityValue, counter } = invoiceItemState


    const onInvoiceItemChange = ({ target: { name, value } }) => {
        setInvoiceItemState({
            ...invoiceItemState,
            [name]: value
        })
    }


    const onInvoiceSubmit = (event) => {
        {
            event.preventDefault()
            if (productValue.trim() === '') {
                alert('El campo producto no puede estar vacio')
                return
            }

            if (isNaN(priceValue.trim()) || isNaN(quantityValue.trim())) {
                alert('El campo precio y cantidad deben ser numeros')
                return
            }

            handler(invoiceItemState)

            setInvoiceItemState({
                productValue: '',
                priceValue: '0',
                quantityValue: '0',
                counter: counter + 1
            })

        }
    }

    return (
        <>
         <form onSubmit={event => onInvoiceSubmit(event)}>
                <input type="text" name="productValue" value={productValue} placeholder='Producto' onChange={onInvoiceItemChange} />
                <input type="text" name="priceValue" value={priceValue} placeholder='Precio' onChange={onInvoiceItemChange} />
                <input type="text" name="quantityValue" value={quantityValue} placeholder='Cantidad' onChange={onInvoiceItemChange} />
                <button type='submit'>Agregar</button>
            </form>
        </>
    )
}