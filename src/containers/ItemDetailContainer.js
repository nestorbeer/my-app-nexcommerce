import ItemDetail from '../components/ItemDetail.js';
import 'bootstrap/dist/css/bootstrap.min.css';

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