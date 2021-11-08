import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import './Item.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Image } from "react-bootstrap";
import { useState } from "react";

function Item(props)
{
    const [isAdded, setAdded] = useState(true);
    const [quantity, setQuantity] = useState();

    const onAdd =(cantidad)=>{
        //console.log('Item' + cantidad)
        setAdded(false)
        setQuantity(cantidad)
        props.onAdd(cantidad)
    }
    return(
        <Col md={12} lg={12} className="item-col-container">
                        <Link to={'/items/' + props.itemId}><Image  alt="" className="detail-img" src={props.itemUrl} /></Link>        
                            <p>{props.name} {(props.stock>0)? "Stock: " + props.stock:'Te quedaste sin stock' }</p>
                            <ItemCount stock={props.stock} initial={props.initial} onAdd={onAdd} quantity={quantity}/>
                            {isAdded?<Link to={'/items/' + props.itemId}>Ver detalle</Link>:<Link to="/cart">Finalizar compra</Link> }

        </Col>
    )
}
export default Item;