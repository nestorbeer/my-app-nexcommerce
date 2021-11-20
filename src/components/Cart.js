import { addDoc, collection, doc, getFirestore, writeBatch } from '@firebase/firestore';
import { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

function Cart(props){
    const {cart, getQuantity, getTotal, clearCart} = useCart();
    const {removeItem} = useCart();
    const quantity = getQuantity();
    const total = getTotal();
    const [showForm, setShowForm] = useState(false)
    const [customerName, setCustomerName] = useState('')
    const [customerPhone, setCustomerPhone] = useState('')
    const [customerEmail, setCustomerEmail] = useState('')
    const [customerEmail2, setCustomerEmail2] = useState('')
    const [idGeretaded, setIdGenerated] = useState('')

    const checkOut = () =>{
        setShowForm(true)
    }

    const closeOrder = ()=>{
        //Validaciones
        if (!customerEmail || !customerEmail2){
            alert('Por favor verifique los emails, son requeridos') 
            return
        }
        if (customerEmail !== customerEmail2){
            alert('Por favor verifique los emails, no coinciden') 
            return
        }
        
        //Construye el objeto order
        const order = {
            buyer:{name: customerName,phone: customerPhone,email: customerEmail},
            items:cart,
            total:total
        }

        //Creo la instancia de la coleccion
        const db = getFirestore();
        
        //Genero la orden con todos los datos
        const orders = collection(db, "orders");
        addDoc(orders, order).then(({id})=>{
            setIdGenerated(id)
        })

        //Descuento el stock de los productos en base con batchUpdate asi es mas performante.
        const batch = writeBatch(db);
        cart.forEach(product => {
            const docRef = doc(db, "items", product.id);
            batch.update(docRef, {docRef, stock: parseInt(product.stock) - parseInt(product.cantidad) });
        });
        batch.commit();
        
        //Vacio el carrito asi puede seguir comprando
        clearCart();
    }


    if (quantity>0) {
        return(
            <Container>
             <br/>
             {
                showForm&&
                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th colSpan="2">Datos del comprador</th>
                        </tr>
                    </thead>
                    <tbody>
                          <tr>
                            <td>Nombre</td>
                            <td><input placeholder="Ingrese el nombre" onChange={event => setCustomerName(event.target.value)} value={customerName}/></td>
                        </tr>
                        <tr>
                            <td>Telefono</td>
                            <td><input placeholder="Ingrese el telefono"onChange={event => setCustomerPhone(event.target.value)} value={customerPhone}/></td>
                        </tr>
                        <tr>
                            <td>e-mail</td>
                            <td><input placeholder="Ingrese el email" onChange={event => setCustomerEmail(event.target.value)} value={customerEmail}/></td>
                        </tr>
                        <tr>
                            <td>repetir e-mail</td>
                            <td><input type="email" placeholder="Repita el email" onChange={event => setCustomerEmail2(event.target.value)} value={customerEmail2}/></td>
                        </tr>
                    </tbody>
                </Table>
            }
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th >Producto</th>
                        <th>Cantidad</th>
                        <th>Precio unitario</th>
                        <th>Precio total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    cart.map(({id, name, cantidad, price})=>
                        <tr>
                            <td>
                                {id}
                            </td>
                            <td>
                                {name}
                            </td>
                            <td>
                                {cantidad}
                            </td>
                            <td align="right">
                                {'$' +price}
                            </td>
                            <td align="right">
                                {'$' + price * cantidad}
                            </td>
                            <td align="center">
                                <Button variant="primary"  size="xs" onClick={()=>{
                                    removeItem(id);
                                }}>Quitar</Button>
                            </td>
                        </tr>
                        
                )}
                </tbody>
                <tfoot>
                    <tr>
                    <td></td>
                    <td><b>Total de la compra</b></td>
                    <td></td>
                    <td></td>
                    <td align="right"><b>{'$' +total}</b></td>
                    <td align="center">
                        {!showForm&&<Button variant="primary"  size="md" onClick={()=>{checkOut()}}>Check out</Button>}
                        {showForm&&<Button variant="primary"  size="md" onClick={()=>{closeOrder()}}>Finalizar compra</Button>}
                    </td>
                    </tr>
                </tfoot>
            </Table>
        </Container>
    )
    }
    else{
        return(
            <Container>
                <br/>
                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                            {idGeretaded&& <td align="center">Gracia por su compra, puede hacer el seguimiento del pedido con el codigo: {idGeretaded}.</td>}
                        </tr>
                        <tr>
                            
                            <td align="center"><Link to="/home">El carrito esta vacio, continuar comprando</Link></td>
                        </tr>
                    </thead>
                </Table>
            </Container>
        )

    }
}
export default Cart;