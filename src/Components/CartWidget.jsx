import React from 'react'
import { useState } from 'react'

const CartWidget = () => {
    const [cont, setcont] = useState(0)

    const cartButton = () =>{
        setcont(cont + 1)
    }

    return (
        <figure className="nav-cart">
            <a href="#" onClick = {cartButton}><i className="large material-icons">shopping_cart</i> {cont}</a>
        </figure>
    )
}

export default CartWidget