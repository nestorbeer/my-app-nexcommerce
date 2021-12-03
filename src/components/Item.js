import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import './Item.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card} from "react-bootstrap";
import { useState } from "react";
import { useCart} from '../contexts/CartContext'
import Swal from "sweetalert2";

function Item(props)
{
    const [isAdded, setAdded] = useState(true);
    const {addItem} = useCart();
    
    const onAdd =(id, cantidad)=>{
        setAdded(false)
        const message = addItem(props.itemId, cantidad, props.stock)
        Swal.fire(message)
    }

    return(
        <Card xs={12} md={6} style={{ maxWidth: '23rem' }}>
            <Card.Body>
            <Card.Img style={{ maxHeight: '20rem' }} alt="" src={props.itemUrl} position='top'></Card.Img>
            <Card.Text className="cardTitle">
            {props.name} <br/>
            {(props.stock>0)? "Stock: " + props.stock:'Sin stock' }  Precio ${props.price}
            <br/>
            <br/>
            <ItemCount stock={props.stock} initial={props.initial} itemId={props.itemId} onAdd={onAdd}/>
            {isAdded?<Link className="linkDetalle" to={'/items/' + props.itemId}>Ver detalle</Link>:<Link className="linkDetalle" to="/cart">Finalizar compra</Link> }
            </Card.Text>
            </Card.Body>
        </Card>
        
            

        
    )
}
export default Item;