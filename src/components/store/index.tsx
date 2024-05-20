import * as React from 'react'
import {Product} from "../../types";

type Action = {type: 'add', payload: Product} | {type: 'remove', payload: number}

type Dispatch = (action: Action) => void

type State = {products: Product[]}

type CartProviderProps = {children: React.ReactNode}

const CartContext = React.createContext<
    {state: State; dispatch: Dispatch} | undefined
>(undefined)

function cartReducer(state: State, action: Action) {
    switch (action.type) {
        case 'add': {

            return {products: [...state.products, action.payload]}
        }
        case 'remove': {

            return {products: state.products.filter(product => product.id !== action.payload)}
        }
        default:
            return state
    }
}

function CartProvider({children}: CartProviderProps) {
    const [state, dispatch] = React.useReducer(cartReducer, {products: []})

    const value = {state, dispatch}

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

function useCart() {
    const context = React.useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

export {CartProvider, useCart}
