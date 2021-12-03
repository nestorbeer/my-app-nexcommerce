import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import Item from "../components/Item";
import './ItemDetailContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import Loader from '../components/loader';
import { getFirestore } from "../firebase";
import {collection,query,where,getDocs} from "firebase/firestore";

function ItemListContainer(props)
{
    const {categoryId} = useParams();
    const {filter} = useParams();
    const [items, setItems] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const db = getFirestore();
  
        let q = null;
        if(categoryId){
            q = query(
            collection(db, "items"),
            where("categoryId", "==", categoryId),
            )
            getDocs(q).then((snapshot) => {
                setItems(
                  snapshot.docs.map((doc) => {
                    const newDoc = { ...doc.data(), id: doc.id };
                    return newDoc;
                  })
                );
                setLoading(false)
              });
        }
        else if (filter) {
            q = query(
                collection(db, "items"),
                )
                getDocs(q).then((snapshot) => {
                    setItems(
                      snapshot.docs.filter(doc=>doc.data().name.toUpperCase().includes(filter.toUpperCase())).map((doc) => {
                        const newDoc = { ...doc.data(), id: doc.id };
                        return newDoc;
                      })
                    );
                    setLoading(false)
                  });
        }

      },[categoryId,filter])

    return(
        <div style={{ width: '100vm',textAlign:'center'}}>
            <p style={{ width: '100vm',textAlign:'center', backgroundColor:'black', color:'grey' }}>ENVÍO GRATIS A PARTIR DE $6000, 6 CUOTAS SIN INTE. | ¡PRIMER CAMBIO GRATIS! </p>
            <Row>
                {
                    items?.map(({ id, name, price, stock, url }) => <Item key={id} itemId={id} name={name} price={price} stock={stock} initial={1} itemUrl={url}/>
                    )
                }
                {loading && <Loader />}
                </Row>
        </div>
        
    )
}
export default ItemListContainer;