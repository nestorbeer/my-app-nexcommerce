import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import Item from "../components/Item";
import {products} from '../Products'
import './ItemDetailContainer.css'
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
    },[categoryId]);

    const onAdd = (cantidad) =>
    {
        //console.log('itemlistcontainer' + cantidad)
        props.onAdd(cantidad)
    }
    return(
        <div className="listaProductos">
            {
                items?.filter(item => item.categoryId === categoryId)
                .map(({ id, name, price, stock, categoryId, url }) => <Item key={id} itemId={id} name={name} stock={stock} initial={1} onAdd={onAdd} quantity={props.quantity} itemUrl={url} />
                )
            }
            {loading && <h1>Cargarando productos</h1>} 
        </div>
    )
}
export default ItemListContainer;