import { getInvoice, calculateTotal } from './components/services/getInvoice.js';
import { ClientView } from './components/ClientView.jsx';
import { CompanyView } from './components/CompanyView.jsx';
import { InvoiceView } from './components/InvoiceView.jsx';
import { ProductViews } from './components/ProductsView.jsx';
import { TotalView } from './components/Total.jsx';
import { useEffect, useState } from 'react';
import { AddItem } from './components/AddItem.jsx';


const dataInit = {
    id: 0,
    name: '',
    client: {
        name: '',
        lastName: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: 0
        }
    },
    company: {
        name: '',
        fiscalNumber: 0,

    },
    items: []
}

export const InvoiceApp = () => {

    const [total, setTotal] = useState(0)

    const [invoice, setInvoice] = useState(dataInit)

    const [items, setItems] = useState([])

    const [hideFormsValue, setHideFormsValue] = useState(false)

    const { id, name, client, company, items: itemsInitials } = invoice

    useEffect(() => {
        const invoiceData = getInvoice()
        setInvoice(invoiceData)
        setItems(invoiceData.items)
    }, [])

    useEffect(() => {
        const dataTotal = calculateTotal(items)
        setTotal(dataTotal)
    }, [items])



    const handlerDeleteItem = (id) => {
        {
            console.log("1111: "+ id)
            setItems(items.filter((item) => item.id !== id));
        }
    }



    const handlerAddItems= ({ productValue, priceValue, quantityValue }) => {
        {
            setItems([
                ...items,
                {
                    id: items.length + 1,
                    product: productValue,
                    price: Number(priceValue),
                    quantity: parseInt(quantityValue, 10)
                }
            ])
        }
    }

    const hiddeForm = () => {
        setHideFormsValue(!hideFormsValue)
    }


    return (
        <div>

            <h1>Ejemplo Factura</h1>
            <InvoiceView id={id} name={name} />

            <h3>Cliente</h3>
            <ClientView {...client} />
            <h3>Compania</h3>
            <CompanyView {...company} />

            <h4>Productos</h4>
            <ProductViews itemsData={items} handlerDelete={id=>handlerDeleteItem(id)} />
            <h4>Total</h4>
            <TotalView total={total} />




            {hideFormsValue ? '' : <div className='formulary'>
                <h4>Add Items</h4>
                <AddItem handler={handlerAddItems} />
            </div>}

            <button onClick={hiddeForm}>
                {hideFormsValue ? 'Agregar Item' : 'Ocultar'}
            </button>

        </div >
    )
}