import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import './Item.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card} from "react-bootstrap";
import { useState } from "react";
import { useCart} from '../contexts/CartContext'

function Item(props)
{
    const [isAdded, setAdded] = useState(true);
    const {addItem} = useCart();
    
    const onAdd =(id, cantidad)=>{
        setAdded(false)
        console.log(props.itemId)
        const message = addItem(props.itemId, cantidad)
        alert(message)
    }

    return(
        <Card style={{ maxWidth: '18rem' }}>
            <Card.Body>
            <Card.Img style={{ maxHeight: '20rem' }} alt="" src={props.itemUrl} position='top'></Card.Img>
            <Card.Text className="cardTitle">
            {props.name}
            <p>{(props.stock>0)? "Stock: " + props.stock:'Te quedaste sin stock' }</p> 
            <ItemCount stock={props.stock} initial={props.initial} itemId={props.itemId} onAdd={onAdd}/>
            {isAdded?<Link to={'/items/' + props.itemId}>Ver detalle</Link>:<Link to="/cart">Finalizar compra</Link> }
            </Card.Text>
            </Card.Body>
        </Card>
        
            

        
    )
}
export default Item;