import { invoice } from '../data/invoice';

export const getInvoice = () => {

    const total = calculateTotal(invoice.items)
    return { ...invoice, total };
}

export const calculateTotal = (items) => {
    let total = 0;
    items.forEach((item) => {
        total += (item.price * item.quantity)
    });

    return total
}