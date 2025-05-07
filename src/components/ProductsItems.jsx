
export const ProductsItems = ({handler, id, name, description, price }) => {

    const onAddItem = (product) => {
        handler(product)

    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{price}</p>
                    <button className="btn btn-primary" onClick={() => onAddItem({ id, name, description, price })}>Agregar</button>
                </div>
            </div>

        </>
    )
}