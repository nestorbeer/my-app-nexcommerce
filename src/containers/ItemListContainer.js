import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import Item from "../components/Item";
import {products} from '../Products'
import './ItemDetailContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Col, Container, Row } from 'react-bootstrap';
import Loader from '../components/loader';

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

    return(
        <Container fluid>
          <Row>
            {
                items?.filter(item => parseInt(item.categoryId) === parseInt(categoryId))
                .map(({ id, name, price, stock, categoryId, url }) => <Col xs={12} md={6} lg={3}><Item key={id} itemId={id} name={name} stock={stock} initial={1} itemUrl={url}/></Col>
                )
            }
            {loading && <Loader />}
          </Row>
        </Container>

        
    )
}
export default ItemListContainer;