import ItemDetail from '../components/ItemDetail.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemDetailContainer(props)
{
    return(
        <div>
            <ItemDetail stock={props.stock} initial={props.initial}></ItemDetail>
        </div>
    )
}
export default ItemDetailContainer;