import { Button, Container, Table } from 'react-bootstrap';
import { useCart } from '../contexts/CartContext';

function Cart(props){
    const {clearCart} = useCart();
    const {cart} = useCart();
    const {getQuantity} = useCart();
    const {removeItem} = useCart();
    const quantity = getQuantity()
    let total = 0
    if (quantity>0) {
        cart.forEach(itemArray => {
            total = total + (itemArray.price * itemArray.cantidad)
        });
        return(
            <Container>
             <br/>
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
                            <td>
                                {price}
                            </td>
                            <td>
                                {price * cantidad}
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
                    <td><b>{total}</b></td>
                    <td align="center"><Button variant="primary"  size="md" onClick={()=>{
                        clearCart();
                        }}>Finalizar compra</Button></td>
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
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <td align="center"><Button href="/home">El carrito esta vacio, continuar comprando</Button></td>
                    </tr>
                </thead>
                </Table>
                
            </Container>
        )

    }
}
export default Cart;