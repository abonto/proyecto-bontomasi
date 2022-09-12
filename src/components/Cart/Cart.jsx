import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
//import Form from '../Form/Form'
//import Item from '../Item/Item';

const Cart = () => {

  const {cart,clear,removeItem,totalPrice} = useContext(CartContext);

  if(cart.length === 0){
    return <>
              <h1>Carro vacio</h1>
              <Link to="/">Ir a comprar</Link>
          </>
  }

  return (
    <div>
          {cart.map((item) => {
            return <>
                      <div  key={item.id}>
                        <h2>{item.title}</h2>
                        <h2>${item.price}</h2>
                        <h2>{item.cantidad}</h2>
                      </div>
                      {/* <Item key={item.id} item={item}/> */}
                      <button onClick={() => removeItem(item.id)}>Remover Producto</button>
                  </>;
        })}
        <button onClick={clear}>Vaciar carro</button>
        <h4>Total: ${totalPrice()}</h4>
    </div>
  )
}

export default Cart