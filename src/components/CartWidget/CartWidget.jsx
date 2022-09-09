import React from 'react'
import estilos from './cartwidget.module.css'

const CartWidget = () => {
  return (
    <div className={estilos.icon}>
        <span className="material-symbols-outlined">
          shopping_cart
        </span>
    </div>
  )
}

export default CartWidget