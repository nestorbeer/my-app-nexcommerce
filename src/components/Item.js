import { useState } from "react";
import ItemCount from "./ItemCount";

function Item(props)
{
    const onAdd =(cantidad)=>{
        //console.log('Item' + cantidad)
        props.onAdd(cantidad)
    }
    return(
        <div>
            <p>{props.name} "Stock: " {props.stock}</p>
            <ItemCount stock={props.stock} initial={props.initial} onAdd={onAdd} quantity={props.quantity}/>
        </div>
    )
}
export default Item;