import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import estilos from './navbar.module.css'

const NavBar = (props) => {

  if(props.isFooter){
    return (
      <nav className={estilos.nav}>
          <h1 className={estilos.titulo}>ELECTRO</h1>
          <ul className={estilos.lista}>
            <li className={estilos.links}><a href="http:/google.com">OFERTAS</a></li>
            <li className={estilos.links}><a href="http:/google.com">ELECTRODOMESTICOS</a></li>
            <li className={estilos.links}><a href="http:/google.com">COMPUTACION</a></li>
            <li className={estilos.links}><a href="http:/google.com">CELULARES</a></li>
          </ul>
          <CartWidget />
      </nav>
    )
  }else{
    return (
      <nav className={estilos.nav}>
          <h1 className={estilos.titulo}>ELECTRO</h1>
          <ul className={estilos.lista}>
            <li className={estilos.links}><a href="http:/google.com">TWITTER</a></li>
            <li className={estilos.links}><a href="http:/google.com">FACEBOOK</a></li>
            <li className={estilos.links}><a href="http:/google.com">CONTACTO</a></li>
          </ul>
      </nav>
    )
  }
}

export default NavBar