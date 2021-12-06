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
        setOrder()
        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                setOrder(snapshot.data());
            }
        });
        
      },[orderId])
      return(
          <>
            <br/>
            {order && <Table striped bordered hover variant="dark">
                    <thead>
                        <tr style={{textAlign:'center'}}>
                            <th colSpan="2">Detalle de la orden:  <b>{orderId}</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Fecha</td>
                            <td>{order.date}</td>
                        </tr>
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
                            <td>${order.total}</td>
                        </tr>
                        <tr>
                            <td>Estado</td>
                            <td>{order.status}</td>
                        </tr>
                    </tbody>
            </Table>}
            {!order&&<h1 style={{textAlign:'center'}}>No se encontro ninguna orden con ese código</h1>}
          </>
      )
}
export default OrderDetail;