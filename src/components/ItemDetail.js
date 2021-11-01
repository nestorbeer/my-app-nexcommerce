import { useState } from "react";
import ItemCount from "./ItemCount";
import {products} from '../Products'
import { Image } from "react-bootstrap";
import '../components/ItemDetail.css'
function ItemDetail(props)
{
    const onAdd =(cantidad)=>{
        //console.log('Item' + cantidad)
        props.onAdd(cantidad)
    }
    return(
        <div >
            {
            products?.filter(item => item.id == props.itemId)
                .map(({ id, name, descrp, price, stock, categoryId, url }, index) => 
                <div>
                    <p><b>Producto:</b> {name}</p>
                    <p><b>Descripción: </b>{descrp}</p> 
                    <Image alt="" src={url} roundedCircle  />
                </div>
                )
            }
            <ItemCount stock={props.stock} initial={props.initial} onAdd={onAdd} quantity={props.quantity}/>
        </div>
    )
}
export default ItemDetail;