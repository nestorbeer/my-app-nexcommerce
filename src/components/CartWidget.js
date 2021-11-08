import React from 'react';
import { Container, Image } from 'react-bootstrap';
import icon from '../shopping-cart.png';
import './CartWidget.css';

function CartWidget(props)
{
    return(
        <Container className="CartWidget-container">
            <Image src={icon} alt="" className="CartWidget-logo" />{' ' + props.quantity}
        </Container>

    )
}
export default CartWidget;