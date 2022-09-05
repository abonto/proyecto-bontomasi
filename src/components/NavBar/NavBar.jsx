import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import estilos from './navbar.module.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
<<<<<<< HEAD
      <>
        <Link to="/" className='titulo'><h1>TIENDA</h1></Link>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center" >
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mx-2" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown"> 
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Remeras</a></li>
                        <li><a className="dropdown-item" href="#">Pantalones</a></li>
                        <li><Link className="dropdown-item" to="/category/calzado">Calzado</Link></li>
                        <li><Link className="dropdown-item" to="/category/gorras">Gorras</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <CartWidget/>
        </nav>
      </>
  )
=======
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
>>>>>>> 2f2144b9521815de7713171ea00b6687e2e6b2d9
}

export default NavBar