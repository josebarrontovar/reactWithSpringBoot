import { act } from "react";


export const itemsReducer = (state = [], action) => {
    switch (action.type) {

        case 'AddItem':
            return [...state,
            {
                product: action.payload,
                quantity: 1,
                total: action.payload.price * 1
            }
            ]
        case 'UpdateItem':
            return state.map(data => {
                if (data.product.id === action.payload.id) {

                    const newQuantity = data.quantity + 1
                    return {
                        ...data,
                        quantity: newQuantity,
                        total: newQuantity * data.product.price
                    }
                }
                return data;
            });

        case 'DeleteItem':
            return [...state.filter(item => item.product.id !== action.payload)]
        default:
            break;
    }
}