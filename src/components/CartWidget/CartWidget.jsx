import React,{useContext} from 'react'
import estilos from './cartwidget.module.css'
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

  const {totalUnit} = useContext(CartContext);
  
  if(totalUnit() > 1)
    return (
      <div className={estilos.icon}>
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
          <p>{totalUnit()}</p>
      </div>
    )
  else 
      return(
        <div className={estilos.icon}>
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </div>
      )
}

export default CartWidget