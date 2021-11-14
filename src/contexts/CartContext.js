import { createContext, useContext, useState } from "react";
import { products } from "../Products";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  
 const [cart, setCart] = useState([]);
 
 const addItem = (id, cantidad) => {
    const productToAdd = products.filter(itemArray => parseInt(id) === parseInt(itemArray.id))
    productToAdd.forEach(element => {
        element.cantidad = cantidad
    });


    if(!isInCart(id)){
        setCart([...cart.concat(productToAdd)])
        return ('El producto se agrego con exito')
    }
    else{
        return ('El producto ya existe')
    }
}

const removeItem = (idItem) => {
    // remover el Item del array y setear el cart
    let newCar = cart.filter(itemArray=>parseInt(idItem) !== parseInt(itemArray.id))
    setCart(newCar)
}

const clearCart = () =>{
    setCart([]);
}

const isInCart = (id) =>{
    return cart.some(itemArray=> itemArray.id === id);
}

const getQuantity = ()=>{
    let cantidad = 0
    cart.forEach(itemArray =>{
        cantidad = cantidad + itemArray.cantidad
    })
    return cantidad
}

return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart,getQuantity  }}>
      {children}
    </CartContext.Provider>
  );
};
