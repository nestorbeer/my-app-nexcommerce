import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import Item from "../components/Item";
import './ItemDetailContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container, Row } from 'react-bootstrap';
import Loader from '../components/loader';
import { getFirestore } from "../firebase";
import {collection,query,where,getDocs} from "firebase/firestore";

function ItemListContainer(props)
{
    const {categoryId} = useParams();
    const [items, setItems] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const db = getFirestore();
        const q = query(
          collection(db, "items"),
           where("categoryId", "==", categoryId),
        );
        getDocs(q).then((snapshot) => {
            setItems(
              snapshot.docs.map((doc) => {
                const newDoc = { ...doc.data(), id: doc.id };
                return newDoc;
              })
            );
            setLoading(false)
          });
      },[categoryId])

    return(
        <div>
        <p style={{ width: '100vm',textAlign:'center', backgroundColor:'black', color:'grey' }}>ENVÍO GRATIS A PARTIR DE $6000, 6 CUOTAS SIN INTE. | ¡PRIMER CAMBIO GRATIS! </p>
            <Container>
            <Row>
                {
                    items?.map(({ id, name, price, stock, categoryId, url }) => <Item key={id} itemId={id} name={name} price={price} stock={stock} initial={1} itemUrl={url}/>
                    )
                }
                {loading && <Loader />}
                </Row>
            </Container>
        </div>
        
    )
}
export default ItemListContainer;