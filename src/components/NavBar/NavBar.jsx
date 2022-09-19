import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { db } from '../../firebaseConfig'
import CartWidget from '../CartWidget/CartWidget'
import estilos from './navbar.module.css'

const NavBar = (props) => {

    

    if (props.isFooter) {
        return (
            <nav className={estilos.nav}>
                <Link to="/">TIENDA</Link>
                <ul>
                    <NavLink to="/category/remeras">Remeras</NavLink>

                    <Link to="/category/calzado">Calzados</Link>

                    <Link to="/category/gorras">Gorras</Link>
                </ul>
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </nav>
        );
    } else {
        return (
            <nav className={estilos.nav}>
                <h1>TIENDA</h1>
                <ul>
                    <li>
                        <a href="https://google.com">Productos</a>
                    </li>
                    <li>
                        <a href="https://google.com">Nosotros</a>
                    </li>
                    <li>
                        <a href="https://google.com">Contacto</a>
                    </li>
                    <li>
                        <a href="https://google.com">Facebook</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar