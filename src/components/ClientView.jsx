export const ClientView = (props) => {
    return (
        <>
            <ul>
                <li>{props.name}</li>
                <li>{props.lastName}</li>
                <li>{props.address.city}</li>
                <li>{props.address.street}</li>
            </ul>
        </>
    )
}