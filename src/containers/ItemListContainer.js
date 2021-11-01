import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import Item from "../components/Item";
import {products} from '../Products'

function ItemListContainer(props)
{
    const {categoryId} = useParams();
    const [items, setItems] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const task = new Promise((resolve,reject) => {
            //Load de productos de una api
            setTimeout(()=>{
                resolve(products);
            },500);                
        });
        task.then(
            (result) => {
            setItems(result)
            setLoading(false)
            }
        )
    },[]);

    const onAdd = (cantidad) =>
    {
        //console.log('itemlistcontainer' + cantidad)
        props.onAdd(cantidad)
    }
    return(
        <div>
            {
                items?.filter(item => item.categoryId == categoryId)
                .map(({ id, name, price, stock, categoryId }) => <Item key={id} itemId={id} name={name} stock={stock} initial={1} onAdd={onAdd} quantity={props.quantity} />
                )
            }
            {loading && <h1>Cargarando productos</h1>} 
        </div>
    )
}
export default ItemListContainer;