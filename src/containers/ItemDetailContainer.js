import { useParams } from 'react-router';
import ItemCount from '../components/ItemCount.js';
import ItemDetail from '../components/ItemDetail.js';
import Products from '../components/Products.js';
import ItemList from './ItemList.js';

function ItemDetailContainer(props)
{
    const onAdd = (cantidad) =>
    {
        //console.log('itemlistcontainer' + cantidad)
        props.onAdd(cantidad)
    }
    return(
        <div>
            <ItemDetail stock={props.stock} initial={props.initial} onAdd={onAdd} quantity={props.quantity}></ItemDetail>
        </div>
    )
}
export default ItemDetailContainer;