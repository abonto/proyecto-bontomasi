import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Form from '../Form/Form';

const Cart = () => {

  const {cart,clear,removeItem,totalPrice} = useContext(CartContext);
  const [idCompra,setIdCompra] = useState('');

  const handleId = (id) => {
    setIdCompra(id);
  }

  const total = totalPrice();

  if(idCompra){
    return <h1>Gracias por comprar tu ID es: ${idCompra}</h1>
  }

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
                      <button onClick={() => removeItem(item.id)}>Remover Producto</button>
                  </>;
        })}
        <button onClick={clear}>Vaciar carro</button>
        <h4>Total: ${total}</h4>
        <Form cart={cart} total={total} clearCart = {clear} handleId={handleId}/>
    </div>
  )
}

export default Cart