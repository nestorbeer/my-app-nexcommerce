import ItemCount from "./ItemCount";
import './ItemDetail.css';
import { useParams } from 'react-router';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useCart} from '../contexts/CartContext'
import { Card} from "react-bootstrap";
import { useEffect } from "react";
import { getFirestore } from "../firebase";
import {doc,getDoc} from "firebase/firestore";
import Swal from "sweetalert2";


function ItemDetail(props)
{
    const {itemId} = useParams();
    const [isAdded, setAdded] = useState(true);
    const {addItem} = useCart();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const onAdd =(id,cantidad)=>{
        setAdded(false)
        const message = addItem(itemId, cantidad, item.stock, item.name, item.price)
        Swal.fire(message)
    }

    useEffect(()=>{
        const db = getFirestore();
        const itemRef = doc(db, "items", itemId);
        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                setItem(snapshot.data());
            }
            setLoading(false)
        });

      },[itemId])
    return(
    <>
        {loading&&<h1>Cargando...</h1>}
        {   item && 
            <Card className="bg-light text-dark">
                <Card.Img src={item.url} alt="Card image"/> 
                    <Card.Title><b>{item.name}</b></Card.Title>
                    <Card.Text>
                             {item.descripcion}<br/>
                            {isAdded? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/> : <Link className="linkCloseOrder" to="/cart">Finalizar compra</Link>}                                
                    </Card.Text>
            </Card>
        }
        {!loading&&!item&&<h1>No se entontro ningun producto con ese código</h1>}
        
    </>
    )
}
export default ItemDetail;