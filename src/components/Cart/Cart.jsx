import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
//import Form from '../Form/Form'
import Item from '../Item/Item';

const Cart = () => {

  const {cart,clear,removeItem} = useContext(CartContext);

  return (
    <div>
          {cart.map((item) => {
            return <>
                      <Item key={item.id} item={item}/>
                      <button onClick={() => removeItem(item.id)}>Remover Producto</button>
                  </>;
        })}
        <button onClick={clear}>Vaciar carro</button>
    </div>
  )
}

export default Cart