import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  
 const [cart, setCart] = useState([]);
 
 const addItem = (id, cantidad, stock, name, price) => {
    console.log('AddItem')
    console.log(id)
    //const productToAdd = products.filter(itemArray => id === itemArray.id)
    const productToAdd = {id:id, cantidad:cantidad, stock:stock, name:name, price:price}
    console.log(productToAdd)
    /*productToAdd.forEach(element => {
        element.cantidad = cantidad
        element.stock = stock
    });*/


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
    const newCart = cart.filter(itemArray=>idItem !== itemArray.id)
    setCart(newCart)
}

const clearCart = () =>{
    setCart([]);
}

const isInCart = (id) =>{
    return cart.some(itemArray=> itemArray.id === id);
}

const getQuantity = ()=>{
    let cantidad = 0
    cart.forEach(itemArray =>{cantidad += itemArray.cantidad})
    return cantidad
}

const getTotal = ()=>{
    let total = 0
    cart.forEach(itemArray => {total += (itemArray.price * itemArray.cantidad)});
    //total = cart.reduce((a, b) => ({cantidad: a.cantidad + b.cantidad}));
    return total
}

return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart,getQuantity,getTotal  }}>
      {children}
    </CartContext.Provider>
  );
};
