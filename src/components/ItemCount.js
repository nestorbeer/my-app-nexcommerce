import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

function ItemCount (props)
{
    const [stock, setStock] = useState(props.stock)
    const [count, setCount] = useState(props.initial)

    const showErrorMessage=(message)=>{
        alert(message);
    }
    const addCount = () => 
    {
        (count < stock)?setCount(count + 1):showErrorMessage('Supera el stock.');
    }

    const decreaceCount = () =>
    {
        (count > 0)?setCount(count - 1):showErrorMessage('La cantidad no puede ser menor a cero.');
    }
    
    const addProduct = () =>
    {
        (count < stock)?props.add():showErrorMessage('Supera el stock.');
    }
    return(
        <div>
            <div onClick={decreaceCount}>-</div>
            <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
            <FormControl
                placeholder="Cantidad"
                aria-label="Cantidad"
                aria-describedby="basic-addon1"
                value={count}
            />
            </InputGroup>
            <div onClick={addCount}>+</div>
            <ButtonGroup aria-label="Basic example">
            <Button variant="primary" onClick={addProduct}>Agregar</Button>
            <Button variant="secondary" onClick={props.decreace}>Quitar</Button>
            </ButtonGroup>
        </div>
    )
}

export default ItemCount;