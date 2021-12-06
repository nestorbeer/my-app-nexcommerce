import ItemDetail from '../components/ItemDetail.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemDetailContainer(props)
{
    return(
        <>
            <br/>
            <ItemDetail stock={props.stock} initial={props.initial}></ItemDetail>
        </>
    )
}
export default ItemDetailContainer;