import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function Item(props)
{
    const onAdd =(cantidad)=>{
        //console.log('Item' + cantidad)
        props.onAdd(cantidad)
    }
    return(
        <div>
            <p>{props.name} {(props.stock>0)? "Stock: " + props.stock:'Te quedaste sin stock' }</p>
            <ItemCount stock={props.stock} initial={props.initial} onAdd={onAdd} quantity={props.quantity}/>
            <Link to={'/items/' + props.itemId}>Ver detalle</Link>
        </div>
    )
}
export default Item;