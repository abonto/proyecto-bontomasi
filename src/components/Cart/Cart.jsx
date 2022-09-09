import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import Form from '../Form/Form'
import Item from '../Item/Item';

const Cart = () => {

  const {cart} = useContext(CartContext);

  return (
    <div>
          {cart.map((item) => {
            return <Item key={item.id} item={item} />;
        })}
      <Form />
    </div>
  )
}

export default Cart