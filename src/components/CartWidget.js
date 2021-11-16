import React from 'react';
import { Container } from 'react-bootstrap';
import './CartWidget.css';
import {useCart} from '../contexts/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

function CartWidget(props)
{
    const logoCart = <FontAwesomeIcon icon={faShoppingCart} />


    const {getQuantity} = useCart()
    const quantity = getQuantity()
    return(
        <Container className="CartWidget-container">
            { quantity > 0 && logoCart  } 
            { quantity > 0 && ' ' + quantity}
        </Container>
    )
}
export default CartWidget;