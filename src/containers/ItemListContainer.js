import ItemCount from '../components/ItemCount.js';
import Products from '../components/Products.js';
import ItemList from './ItemList.js';

function ItemListContainer(props)
{
    const onAdd = (cantidad) =>
    {
        //console.log('itemlistcontainer' + cantidad)
        props.onAdd(cantidad)
    }
    return(
        <div>
            <ItemList onAdd={onAdd} quantity={props.quantity}></ItemList>
        </div>
    )
}
export default ItemListContainer;