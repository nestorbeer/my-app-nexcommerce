import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import './Item.css'
function Item(props)
{
    const onAdd =(cantidad)=>{
        //console.log('Item' + cantidad)
        props.onAdd(cantidad)
    }
    return(
        <div>
            <p>{props.name} {(props.stock>0)? "Stock: " + props.stock:'Te quedaste sin stock' }</p>
            <div className="item-detail-img">
                <img className="detail-img" alt="" src={props.itemUrl} />
            </div>
            <ItemCount stock={props.stock} initial={props.initial} onAdd={onAdd} quantity={props.quantity}/>
            <Link to={'/items/' + props.itemId}>Ver detalle</Link>
        </div>
    )
}
export default Item;