import Button from '../button/Button'

import { CartContext } from '../../context/CartContext'

import CartItem from '../cartItem/CartItem'

import './cartDropdown.scss'
import { useContext } from 'react'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button>GO TO CHECKOUT</Button>

        </div>
    )
}

export default CartDropdown