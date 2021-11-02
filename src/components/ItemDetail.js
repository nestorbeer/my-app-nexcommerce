import { useState } from "react";
import ItemCount from "./ItemCount";
import {products} from '../Products'
import Image from 'react-bootstrap/Image'
import './ItemDetail.css';
import { useParams } from 'react-router';
import { Col, Container, Row } from "react-bootstrap";

function ItemDetail(props)
{
    const {itemId} = useParams();
    const onAdd =(cantidad)=>{
        //console.log('Item' + cantidad)
        props.onAdd(cantidad)
    }
    return(
        <div className="item-detail">
            {
            products?.filter(item => item.id == itemId)
                .map(({ id, name, descrp, price, stock, categoryId, url }, index) => 
                <div>
                    <div className="detalle">
                        <p><b>Producto:</b> {name}</p>
                        <p><b>Descripción: </b>{descrp}</p>
                    </div>
                    <div className="item-detail-img">
                        <img className="detail-img" alt="" src={url} />
                    </div>
                    <ItemCount stock={stock} initial={1} onAdd={onAdd} quantity={props.quantity}/>
                </div>
                )
            }
            
        </div>
    )
}
export default ItemDetail;