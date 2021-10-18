import { useEffect, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Item from "../components/Item";

const data = [
    { id: "bici", price: 200, name: "Bicicleta", stock: 10 },
    { id: "monopatin", price: 200, name: "Monopatin", stock: 5 }
  ];

function ItemList(props)
{
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const task = new Promise((resolve,reject) => {
            //Load de productos de una api
            setTimeout(()=>{
                resolve(data);
            },5000);                
        });
        task.then(
            (result) => {
            setItems(result)
            setLoading(false)
            }
        )
    },[]);

    const onAdd =(cantidad)=>{
        //console.log('ItemList' + cantidad)
        props.onAdd(cantidad)
    }
    
    return(
        <div>
            {items?.map(({ name, price, stock }) => (
            <Item key={name} name={name} stock={stock} initial={1} onAdd={onAdd} quantity={props.quantity} />
            ))}
            {loading && <h1>Bienvenido a la tienda de EL DON, en un momento se cargaran los productos</h1>}
        </div>
         
    )
}
export default ItemList;