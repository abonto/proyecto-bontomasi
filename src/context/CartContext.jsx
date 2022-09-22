import {createContext, useState} from "react";

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
                return {
                    ...prod,
                    cantidad: cantidad,
                };
            }else{
                return prod;
            }
        });
        setCart(cartac);
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)
        return product?.cantidad;
    }

    const totalUnit = () => {
        let count = 0;
        cart.forEach((prod) => {
            count += prod.cantidad;
        });
        return count;
    }

    const totalPrice = () => {
        let count = 0;
        cart.forEach((prod) => {
            count += (prod.price * prod.cantidad)
        });
        return count;
    }

    return <CartContext.Provider value={{cart,addToCart,clear,removeItem,getProductQuantity,totalPrice,totalUnit}}>
                {children}
            </CartContext.Provider> 
}

export default CartProvider