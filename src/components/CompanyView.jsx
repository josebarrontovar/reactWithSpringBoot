

export const CompanyView = (props) => {
    return (
        <>
            <ul>
                <li>{props.name}</li>
                <li>{props.fiscalNumber}</li>
            </ul>
        </>
    )
}