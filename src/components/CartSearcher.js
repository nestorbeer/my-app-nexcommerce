import React from 'react';
import './CartSearcher.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function CartSearcher(props)
{
    const logoSearch = <FontAwesomeIcon icon={faSearch} onClick={()=>{setShowHide(!showHide)}} />
    const [showHide, setShowHide] = useState(false);
    const [filter, setFilter] = useState('');
    return(
        <div className="Cart-container">
            {showHide&&<input placeholder="Producto" style={{ maxWidth: '400px', textAlign:"center" }} onChange={event => setFilter(event.target.value)} value={filter}/>}{' '}
            {logoSearch}
        </div>
    )
}
export default CartSearcher;