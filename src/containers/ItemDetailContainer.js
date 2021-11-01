import { useParams } from 'react-router';
import ItemCount from '../components/ItemCount.js';
import ItemDetail from '../components/ItemDetail.js';
import Products from '../components/Products.js';
import ItemList from './ItemList.js';

function ItemDetailContainer(props)
{
    const {itemId} = useParams();
    const onAdd = (cantidad) =>
    {
        //console.log('itemlistcontainer' + cantidad)
        props.onAdd(cantidad)
    }
    return(
        <div>
            <ItemDetail onAdd={onAdd} quantity={props.quantity} itemId={itemId}></ItemDetail>
        </div>
    )
}
export default ItemDetailContainer;