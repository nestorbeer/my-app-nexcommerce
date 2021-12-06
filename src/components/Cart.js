import { addDoc, collection, doc, getFirestore, writeBatch } from '@firebase/firestore';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useCart } from '../contexts/CartContext';
import './Cart.css';

function Cart(){
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
    const showErrorMessage=(message)=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message
          })
    }
    
    const showSuccessMessage=(message)=>{
        Swal.fire({
            icon: 'success',
            title: '',
            text: message
          })
    }
    const closeOrder = ()=>{
        if (!customerEmail || !customerEmail2){
            showErrorMessage('Por favor verifique los emails, son requeridos') 
            return
        }
        if (customerEmail !== customerEmail2){
            showErrorMessage('Por favor verifique los emails, no coinciden') 
            return
        }
        
        const order = {
            buyer:{name: customerName,phone: customerPhone,email: customerEmail},
            items:cart,
            total:total,
            date: Date(),
            status:'created'
        }
        const db = getFirestore();
        const orders = collection(db, "orders");
        addDoc(orders, order).then(({id})=>{
            setIdGenerated(id)
            showSuccessMessage(`La orden  ${id} se genero con exito.` )
        })
        const batch = writeBatch(db);
        cart.forEach(product => {
            const docRef = doc(db, "items", product.id);
            batch.update(docRef, {docRef, stock: parseInt(product.stock) - parseInt(product.cantidad) });
        });
        batch.commit();
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
                    <tr align="center">
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
                        <tr key={id}>
                            <td align="center">
                                {id}
                            </td>
                            <td>
                                {name}
                            </td>
                            <td align="right">
                                {cantidad}
                            </td>
                            <td align="right">
                                {'$' +price}
                            </td>
                            <td align="right">
                                {'$' + price * cantidad}
                            </td>
                            <td align="center">
                                    <FontAwesomeIcon icon={faTrashAlt} onClick={()=>{
                                        removeItem(id);
                                    }}/>
                               
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
                        {!showForm&&<Button variant="primary"  size="md" onClick={()=>{checkOut()}}>Realizar compra</Button>}
                        {showForm&&<Button variant="primary"  size="md" onClick={()=>{closeOrder()}}>Finalizar</Button>}
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
                            {idGeretaded&& <td align="center">Gracia por su compra, puede hacer el seguimiento del pedido con el codigo: {idGeretaded}</td>}
                        </tr>
                        <tr>
                            
                            <td align="center"><Link className="linkEmptyCart" to="/home">El carrito esta vacio, continuar comprando</Link></td>
                        </tr>
                    </thead>
                </Table>
            </Container>
        )

    }
}
export default Cart;