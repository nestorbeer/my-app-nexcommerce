import React from 'react';
import { Container, Image } from 'react-bootstrap';
import icon from '../shopping-cart.png';
import './CartWidget.css';
import {useCart} from '../contexts/CartContext'

function CartWidget(props)
{
    const {getQuantity} = useCart()
    const quantity = getQuantity()
    return(
        <Container className="CartWidget-container">
            { quantity > 0 && <Image src={icon} alt="" className="CartWidget-logo" /> } 
            { quantity > 0 && ' ' +quantity}
        </Container>
    )
}
export default CartWidget;