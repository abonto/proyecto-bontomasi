import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import estilos from './navbar.module.css'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  if(props.isFooter){
    return (
      <nav className={estilos.nav}>
          <Link to='/' className={estilos.titulo}>TIENDA SUPER</Link>
          <ul className={estilos.lista}>
            <Link to='/category/remeras' className={estilos.links}>REMERAS</Link>
            <Link to='/category/gorras' className={estilos.links}>GORRA</Link>
            <Link to='/category/calzado' className={estilos.links}>CALZADO</Link>
          </ul>
          <Link to='/cart'><CartWidget /></Link>
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