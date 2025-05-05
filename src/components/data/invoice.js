export const invoice = {
    id: 10,
    name: 'Componentes PC',
    client: {
        name: 'Jose',
        lastName: 'Barron',
        address: {
            country: 'MX',
            city: 'Monterrey',
            street: 'Lucca',
            number: 110
        }
    },
    company: {
        name: 'NewTech',
        fiscalNumber: 123456789,

    },
    items: [
        {
            product: 'CPU 1',
            price: 1,
            quantity: 10
        },

        {
            product: 'CPU 2',
            price: 2,
            quantity: 10
        },

        {
            product: 'CPU 3',
            price: 3,
            quantity: 10
        }

    ]
}

