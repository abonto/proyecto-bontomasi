import { createContext } from "react";
import {useState} from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item,cantidad) => {
        if(isInCart(item.id)){
           sumItemCant(item,cantidad); 
        }else{
            setCart([...cart,{...item,cantidad}]);
        }
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const clear = () => {
        setCart([]);
    }

    const removeItem = (id) => {
        const carro = cart.filter((prod) => prod.id !== id);
        setCart(carro);
    }

    const sumItemCant = (item,cantidad) => {
        const cartac = cart.map((prod) => {
            if(prod.id === item.id) {
                const prodac = {
                    ...prod,
                    cantidad: prod.cantidad + cantidad,
                };
                return prodac;
            }else{
                return prod;
            }
        });
        setCart(cartac);
    }

    return <CartContext.Provider value={{cart,addToCart,clear,removeItem}}>
                {children}
            </CartContext.Provider> 
}

export default CartProvider