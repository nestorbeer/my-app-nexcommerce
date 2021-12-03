import React, { useState } from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Swal from "sweetalert2";

function ItemCount (props)
{
    const [stock] = useState(props.stock)
    const [countIn, setCountIn] = useState(0)

    const showErrorMessage=(message)=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message
          })
    }

    const addCount = () => 
    {
        if(countIn !== undefined)
        {
            if(Number(countIn) < Number(stock))setCountIn(Number(countIn) + 1)
            else showErrorMessage('La cantidad requerida supera el stock disponible.');
        }
        else setCountIn(Number(1));
    }

    const decreaceCount = () =>
    {
        if(countIn !== undefined)
        {
            if(Number(countIn)> Number(0)) setCountIn(Number(countIn) - 1)
            else showErrorMessage('La cantidad no puede ser menor a cero.');
        }
        else setCountIn(Number(1));
    }
    
    const addProduct = (itemId) =>{
        if(Number(countIn)===0){
            showErrorMessage('La cantidad no puede ser cero');
            return;
        }
        (Number(countIn) <= Number(stock))?props.onAdd(itemId, Number(countIn)):showErrorMessage('La cantidad requerida supera el stock disponible.');
    }
    
    return(
        <Container className="count-container">
            <Row>
                <Col size="xs">
                    <FontAwesomeIcon icon={faMinus} onClick={decreaceCount} style={{fontSize: 'large'}} />{' '}
                        <input style={{ maxWidth: '2.5rem', textAlign:"center" }} onChange={event => setCountIn(event.target.value)} value={countIn}/>{' '}
                    <FontAwesomeIcon icon={faPlus} onClick={addCount} style={{fontSize: 'large'}} />
                </Col>
            </Row>
            <Button variant="primary"  size="md" onClick={()=>{
                addProduct(props.itemId);
            }}>Agregar </Button>
        </Container>
    )
}

export default ItemCount;