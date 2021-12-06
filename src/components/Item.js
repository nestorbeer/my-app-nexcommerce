import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import './Item.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col} from "react-bootstrap";
import { useState } from "react";
import { useCart} from '../contexts/CartContext'
import Swal from "sweetalert2";

function Item(props)
{
    const [isAdded, setAdded] = useState(true);
    const {addItem} = useCart();
    
    const onAdd =(id, cantidad)=>{
        setAdded(false)
        const message = addItem(props.itemId, cantidad, props.stock, props.name, props.price)
        Swal.fire(message)
    }

    return(
        <Col xs={12} md={6} lg={3} xl={3}>
        <Card  style={{  borderRadius:'1rem' }}>
            <Card.Body>
            <Card.Img alt="Card image" src={props.itemUrl}></Card.Img>
            <Card.Text className="cardTitle">
            {props.name} <br/>
            {(props.stock>0)? "Stock: " + props.stock:'Sin stock' }  Precio ${props.price}
            <br/>
            <br/>
            {isAdded&&<ItemCount stock={props.stock} initial={props.initial} itemId={props.itemId} onAdd={onAdd}/>}
            <br/>
            {isAdded?<Link className="linkDetalle" to={'/items/' + props.itemId}>Ver detalle</Link>:<Link className="linkDetalle" to="/cart">Finalizar compra</Link> }
            </Card.Text>
            </Card.Body>
        </Card>
        <br/>
        </Col>
            

        
    )
}
export default Item;