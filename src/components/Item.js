import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import './Item.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Image, Row } from "react-bootstrap";
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
        <Card className="card">
                <Card.Body>
                <Card.Title className="cardTitle">{props.name}</Card.Title>
                <Card.Text>
                    <Container>
                        <Row>
                            <Link to={'/items/' + props.itemId}>
                                <Image  alt="" className="detail-img" src={props.itemUrl} />
                            </Link>
                        </Row>
                        <Row>
                            <Col  className="cardTitle">
                                <p>{(props.stock>0)? "Stock: " + props.stock:'Te quedaste sin stock' }</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col  className="cardTitle">
                                <ItemCount stock={props.stock} initial={props.initial} itemId={props.itemId} onAdd={onAdd}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col  className="cardTitle">
                                {isAdded?<Link to={'/items/' + props.itemId}>Ver detalle</Link>:<Link to="/cart">Finalizar compra</Link> }
                            </Col>
                        </Row>
                        
                    </Container>
                    </Card.Text>
                </Card.Body>
        </Card>
        
            

        
    )
}
export default Item;