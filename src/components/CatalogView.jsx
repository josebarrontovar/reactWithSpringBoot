import { getProduct } from '../service/productService';
import { useEffect, useState } from 'react'
import { ProductsItems } from './ProductsItems';


export const CatalogView = ({handler}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const allProducts = getProduct()
        setProducts(allProducts)
    }, [])

    return (
        <>
            <div className="row">
                {products.map(prod => (
                    <div className="col-4 my-2" key={prod.id}>
                        <ProductsItems handler={product=>handler(product)} id={prod.id} name={prod.name} description={prod.description} price={prod.price} />
                    </div>
                ))}

            </div>
        </>
    )
}