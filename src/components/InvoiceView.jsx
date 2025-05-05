import PropTypes from "prop-types"

export const InvoiceView = ({id,name}) => {

    return (
        <>
            <ul>
                <li>Id:{id}</li>
                <li>Nombre: {name}</li>
            </ul>
        </>
    )

}


InvoiceView.propTypes={
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}