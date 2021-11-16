import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import Item from "../components/Item";
import './ItemDetailContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Col, Container, Row } from 'react-bootstrap';
import Loader from '../components/loader';
import { getFirestore } from "../firebase";
import {collection,query,where,getDocs} from "firebase/firestore";

function ItemListContainer(props)
{
    const {categoryId} = useParams();
    const [items, setItems] = useState();
    const [loading, setLoading] = useState(true);

    /*useEffect(()=>{
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
    },[categoryId]);*/
    
    //Recupero de la base los productos filtrando por categoria    
    useEffect(()=>{
        const db = getFirestore();
        const q = query(
          collection(db, "items"),
           where("categoryId", "==", categoryId),
        );
        getDocs(q).then((snapshot) => {
            setItems(
              snapshot.docs.map((doc) => {
                const newDoc = { ...doc.data() };
                return newDoc;
              })
            );
            setLoading(false)
          });
      },[categoryId])
    return(
        <Container style={{ paddingLeft:'0rem', paddingRight:'0rem', fontFamily:'Road Rage, cursive' }}>
          <div style={{ width: '100vm',textAlign:'center', backgroundColor:'black', color:'grey' }}>ENVÍO GRATIS A PARTIR DE $6000, 6 CUOTAS SIN INTE. | ¡PRIMER CAMBIO GRATIS! </div>
          <br/>
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