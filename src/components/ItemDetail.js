import ItemCount from "./ItemCount";
import './ItemDetail.css';
import { useParams } from 'react-router';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useCart} from '../contexts/CartContext'
import { Card } from "react-bootstrap";
import { useEffect } from "react";
import { getFirestore } from "../firebase";
import {doc,getDoc} from "firebase/firestore";

function ItemDetail(props)
{
    const {itemId} = useParams();
    const [isAdded, setAdded] = useState(true);
    const {addItem} = useCart();
    const [item, setItem] = useState(null);

    const onAdd =(id,cantidad)=>{
        //console.log('Item' + cantidad)
        setAdded(false)
        const message = addItem(itemId, cantidad)
        alert(message)
    }
    useEffect(()=>{
        const db = getFirestore();
        const itemRef = doc(db, "items", itemId);
        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                setItem(snapshot.data());
            }
        });

      },[itemId])
    return(
        <div className="item-detail">
            {item && <Card className="bg-dark text-dark">
                <Card.Img className="detail-img" src={item.url} alt="Card image" style={{width:'60rem'}}/> 
                <Card className="bg-light" style={{width:'60rem'}}>
                    <Card.Title>Detalle de producto</Card.Title>
                    <Card.Text>
                        <p><b>Producto:</b> {item.name}</p>
                        <p><b>Descripción: </b>{item.name}</p>
                    </Card.Text>
                    <Card.Text>{isAdded? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/> : <Link to="/cart">Finalizar compra</Link>}</Card.Text>
                </Card>
            </Card>}
        </div>
    )
}
export default ItemDetail;