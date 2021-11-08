import { Button, Container } from 'react-bootstrap';

const pagar = (props) =>{
    props.resetCounter();
    alert('Gracias por su compra');
}
function Cart(props){
    return(
        <Container>
            <p>Producto: 1 cantidad: 1</p>
            <p>Producto: 2 cantidad: 3</p>
            <p>Producto: 3 cantidad: 5</p>
            <p>Producto: 4 cantidad: 1</p>
            <p>Producto: 5 cantidad: 6</p>
            <p>Producto: 6 cantidad: 10</p>
            <p>Producto: 7 cantidad: 5</p>
            <Button variant="primary"  size="lg" onClick={()=>{
                pagar(props);
            }}>Check Out</Button>
        </Container>
    )
}
export default Cart;