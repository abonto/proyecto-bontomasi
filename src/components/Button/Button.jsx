import React from 'react'
import estilos from "./button.module.css"

const Button = ({value,variant,func}) => {
  return (
    <button className={estilos[variant]} onClick={func}>{value}</button>
  )
}

export default Button