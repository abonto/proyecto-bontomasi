import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import estilos from './navbar.module.css'

const NavBar = () => {
    return (
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
}

export default NavBar