import { createContext, useContext, useState } from "react";
import { products } from "../Products";
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  
 const [cart, setCart] = useState([]);
 
 const addItem = (id, cantidad) => {
    const procuctToAdd = products.filter(itemArray => parseInt(id) === parseInt(itemArray.id))
    console.log(procuctToAdd)
    if(!isInCart(procuctToAdd.id)){
        setCart([...cart, procuctToAdd]);
    }
    else{
        console.log('El producto ya existe')
    }
  };

  const removeItem = (idItem) => {
    // remover el Item del array y setear el cart
    let newCar = []
    cart.map(({id},index)=>(id===idItem)?newCar=[...newCar, cart.filter(itemArray => parseInt(id) === parseInt(itemArray.id))]:console.log('nada')
    )
    setCart(newCar)
  };

  const clear = () =>{
    setCart([]);
  }

  const isInCart = (id) =>{
    const product = cart.filter(itemArray => parseInt(id) === parseInt(itemArray.id));
    console.log(product)
    return (product.length > 0 );
  }
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};