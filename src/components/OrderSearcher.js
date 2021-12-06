import React from 'react';
import './CartSearcher.css';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';

function OrderSearcher(props)
{
    const [orderId, setOrder] = useState('');
    let history = useHistory();

    const handleFilter =(event, filter)=>{
        if (event.key === 'Enter') {
            (filter)?history.push(`/orders/${orderId}`):history.push("/");
        }
    }

    return(
        <div className="Cart-container">
            {<input placeholder="Buscar orden" style={{ maxWidth: '400px', textAlign:"center" }} onChange={event=> setOrder(event.target.value)} onKeyPress={event => handleFilter(event, event.target.value)} value={orderId}/>}{' '}
        </div>
    )
}
export default OrderSearcher;