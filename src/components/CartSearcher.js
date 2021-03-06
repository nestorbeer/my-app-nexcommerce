import React from 'react';
import './CartSearcher.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import {useHistory} from 'react-router-dom';

function CartSearcher(props)
{
    const logoSearch = <FontAwesomeIcon icon={faSearch} />
    const [filter, setFilter] = useState('');
    let history = useHistory();

    const handleFilter =(event, filter)=>{
        if (event.key === 'Enter') {
            (filter)?history.push(`/filter/${filter}`):history.push("/filter/nps");
        }
    }

    return(
        <div className="Cart-container" style={{margin:'2px'}}>
            {<input placeholder="Buscar producto" style={{ maxWidth: '400px', textAlign:"center",boxShadow: '0 0 25px 0 black' }} onChange={event=> setFilter(event.target.value)} onKeyPress={event => handleFilter(event, event.target.value)} value={filter}/>}{' '}
            {logoSearch}
        </div>
    )
}
export default CartSearcher;