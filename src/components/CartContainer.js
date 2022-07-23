import React from 'react'
import { useGlobalContext } from '../helpers/context'
import CartItem from './CartItem'

export default function CartContainer() {
    const {
        state:{cart, total},
        clearCart
    } = useGlobalContext()
    if (cart.length === 0) {
        return <div>
            <header className="text-center">
                <h2>Your Bag</h2>
                <h4 className="empty cart">Is Currently empty</h4>
            </header>
        </div>
    }
    return (
        <section className="cart">
            <header className="text-center">
                <h2 className="header">Your Bag</h2>
            </header>
            <div className="cart-items container justify-content-center">
                <div>
                    {cart.map((item) => {
                        return <CartItem key={item.id} {...item} />
                    })}
                </div>
            </div>
            <footer className="container">
                <hr />
                <div className="cart-total">
                    <h4 className="d-flex">
                        total: <p className="ms-auto">${total}</p>
                    </h4>
                </div>
                <div className="container d-flex justify-content-center">
                    <button className="clear-btn btn btn-outline-danger" onClick={clearCart}>
                        Clear Cart
                    </button>
                </div>
            </footer>
        </section>
    )
}
