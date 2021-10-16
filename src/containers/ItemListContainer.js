import ItemCount from '../components/ItemCount.js';
import Products from '../components/Products.js';

function ItemListContainer(props)
{
    return(
        <div>
            <ItemCount stock={5} initial={1} add={props.add} decreace={props.decreace}/>
            <ItemCount stock={2} initial={1} add={props.add} decreace={props.decreace}/>
            <ItemCount stock={3} initial={1} add={props.add} decreace={props.decreace}/>
            <ItemCount stock={5} initial={1} add={props.add} decreace={props.decreace}/>
            <ItemCount stock={5} initial={0} add={props.add} decreace={props.decreace}/>
        </div>
    )
}
export default ItemListContainer;