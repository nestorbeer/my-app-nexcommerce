import React from 'react';
import icon from '../shopping-cart.png';
import './CartWidget.css';

function CartWidget(props)
{
    return(
        <div className="CartWidget">
            <img src={icon} alt="" className="CartWidget-logo" ></img> Productos: {props.quantity}
        </div>

    )
}
export default CartWidget;