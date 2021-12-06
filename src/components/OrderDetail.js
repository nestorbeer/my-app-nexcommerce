import { useParams } from 'react-router';
import { useState } from "react";
import { useEffect } from 'react';
import { doc, getDoc, getFirestore } from '@firebase/firestore';
import { Table } from 'react-bootstrap';

function OrderDetail(){
    const {orderId} = useParams()
    const [order,setOrder] = useState()

    useEffect(()=>{
        const db = getFirestore();
        const itemRef = doc(db, "orders", orderId);
        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                setOrder(snapshot.data());
                console.log(order)
            }
        });
        
      },[orderId])
      return(
          <>
            <br/>
            {order && <Table striped bordered hover variant="light">
                    <thead>
                        <tr style={{textAlign:'center'}}>
                            <th colSpan="2">Detalle de la orden <b>{orderId}</b></th>
                        </tr>
                    </thead>
                    <tbody>
                          <tr>
                            <td>Nombre</td>
                            <td>{order.buyer.name}</td>
                        </tr>
                        <tr>
                            <td>Telefono</td>
                            <td>{order.buyer.phone}</td>
                        </tr>
                        <tr>
                            <td>e-mail</td>
                            <td>{order.buyer.email}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>{order.total}</td>
                        </tr>
                    </tbody>
            </Table>}
          </>
      )
}
export default OrderDetail;