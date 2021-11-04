import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import './Item.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Image } from "react-bootstrap";

function Item(props)
{
    const onAdd =(cantidad)=>{
        //console.log('Item' + cantidad)
        props.onAdd(cantidad)
    }
    return(
        <Col md={3}>
            
            <Link to={'/items/' + props.itemId}><Image  alt="" className="detail-img" src={props.itemUrl} /></Link>
            <p>{props.name} {(props.stock>0)? "Stock: " + props.stock:'Te quedaste sin stock' }</p>
            <ItemCount stock={props.stock} initial={props.initial} onAdd={onAdd} quantity={props.quantity}/>
            <Link to={'/items/' + props.itemId}>Ver detalle</Link>
        </Col>
    )
}
export default Item;