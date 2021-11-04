import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function ItemCount (props)
{
    //Stocl inicial
    const [stock] = useState(props.stock)
    //Cantidad de items a agregar
    const [count] = useState(props.quantity)

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
    
    const addProduct = () =>{
        //console.log('Item count'+ count)
        props.onAdd(Number(countIn))
        //props.setCount(count)
        //(count < stock)?props.add(count):showErrorMessage('Supera el stock.');
    }
    return(
        <div>
            <div onClick={decreaceCount}>-</div>
            <input onChange={event => setCountIn(event.target.value)} value={countIn}/>
            <div onClick={addCount}>+</div>
            <Button variant="primary"  size="lg" onClick={()=>{
                console.log('Aprete' + count + '-' + countIn);
                addProduct();
            }}>Agregar </Button>
        </div>
    )
}

export default ItemCount;