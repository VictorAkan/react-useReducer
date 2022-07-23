import React from 'react'
import { useGlobalContext } from '../helpers/context'

export default function CartItem({ id,title,img,price,amount }) {
    const {increase,decrease,remove} = useGlobalContext()
    return (
        <article className="cart-item d-flex justify-content-between mt-5">
            <div className="d-flex">
                <img src={img} alt="phone" />
            <div>
                <h4 className="title">{title}</h4>
                <h4 className="item-price" style={{color:'grey'}}>${price}</h4>
                <button className="remove--btn" onClick={() => remove(id)}>
                    remove
                </button>
            </div>
            </div>
            <div className="count--wrap">
                <button className="amount--btn" onClick={() => increase(id)}>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                        <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
                    </svg>
                </button>
                <p className="amount ms-3">{amount}</p>
                <button className="amount--btn" onClick={() => decrease(id)}>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                </button>
            </div>
        </article>
    )
}
