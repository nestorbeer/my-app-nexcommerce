import ItemCount from "./ItemCount";
import {products} from '../Products'
import './ItemDetail.css';
import { useParams } from 'react-router';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useCart} from '../contexts/CartContext'

function ItemDetail(props)
{
    const {itemId} = useParams();
    const [isAdded, setAdded] = useState(true);
    const {addItem} = useCart();

    const onAdd =(id,cantidad)=>{
        //console.log('Item' + cantidad)
        setAdded(false)
        const message = addItem(itemId, cantidad)
        alert(message)
    }
    return(
        <div className="item-detail">
            {
            products?.filter(item => parseInt(item.id) === parseInt(itemId))
                .map(({ id, name, descrp, price, stock, categoryId, url }, index) => 
                <div>
                    <div className="detalle">
                        <p><b>Producto:</b> {name}</p>
                        <p><b>Descripción: </b>{descrp}</p>
                    </div>
                    <div className="item-detail-img">
                        <img className="detail-img" alt="" src={url} />
                    </div>
                    {isAdded? <ItemCount stock={stock} initial={1} onAdd={onAdd}/> : <Link to="/cart">Finalizar compra</Link>}
                </div>
                )
            }
            
        </div>
    )
}
export default ItemDetail;