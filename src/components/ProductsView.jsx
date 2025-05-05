

export const ProductViews=({itemsData,handlerDelete})=>{

    const onDeleteItem = (id) => {
        console.log("2222 "+id)
        handlerDelete(id)
    }

    return (
        <>
         <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsData.map((item, index) => {
                        const {id, product, price, quantity } = item
                        return (
                            <tr key={index}>
                                <td>{product}</td>
                                <td>{price}</td>
                                <td>{quantity}</td>
                                <td> <button onClick={()=>onDeleteItem(id)}>Eliminar</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </>
    )
}