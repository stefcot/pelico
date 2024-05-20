import {FC} from 'react'
import clsx from 'clsx'
import {useCart} from "../store";

export interface CartPageProps {
    className?: string
}

const CartPage: FC<CartPageProps> = ({className}) => {
    console.log('CartPage::render')

    const { state, dispatch } = useCart()

    const handleRemove = (id: number) => {
        dispatch({type: "remove", payload: id})
    }

    return <div className={clsx('flex flex-col', className)}>
        <ul>
            {state.products.map(({ id, title }) => <li key={id}>{title}<button onClick={() => handleRemove(id)}>Retirer du cart</button></li>)}
        </ul>
    </div>
}

export default CartPage
