import React, { useState } from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemCount (props)
{

    //Stocl inicial
    const [stock] = useState(props.stock)
    //Cantidad de items a agregar

    //Cantidad ingresada en el textBox
    const [countIn, setCountIn] = useState(0)

    const showErrorMessage=(message)=>{
        alert(message);
    }

    const addCount = () => 
    {
        if(countIn !== undefined)
        {
            if(Number(countIn) < Number(stock)){
                setCountIn(Number(countIn) + 1)

            }
            else{
                showErrorMessage('Supera el stock.');
            }
        }
        else
        {
            setCountIn(Number(1));
        }
    }

    const decreaceCount = () =>
    {
        if(countIn !== undefined)
        {
            if(Number(countIn)> Number(0)){
                setCountIn(Number(countIn) - 1)
            }
            else{
                showErrorMessage('La cantidad no puede ser menor a cero.');
            }
        }
        else
        {
            setCountIn(Number(1));
        }
    }
    
    const addProduct = (itemId) =>{
        props.onAdd(itemId, Number(countIn))
    }
    
    return(
        <Container>
            <Row>
                <Col size="xs">
                    <Button variant="success" size="xs" onClick={decreaceCount}>-</Button>
                        <input onChange={event => setCountIn(event.target.value)} value={countIn}/>
                    <Button variant="success" size="xs" onClick={addCount}>+</Button>
                </Col>
            </Row>
            <Button variant="primary"  size="md" onClick={()=>{
                addProduct(props.itemId);
            }}>Agregar </Button>
        </Container>
    )
}

export default ItemCount;