import React, {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { db } from '../../firebaseConfig'
import {collection,getDocs} from 'firebase/firestore';
import CartWidget from '../CartWidget/CartWidget'
import estilos from './navbar.module.css'

const NavBar = (props) => {

    const [categories,setCategories] = useState([]);

    useEffect(() => {
        const collectionCategory = collection(db,'categorias');
        
        getDocs(collectionCategory).then((res) => {
            const categorias = res.docs.map((cat) => {
                return {
                    id: cat.id,
                    ...cat.data(),
                };
            });
            setCategories(categorias);
        })
    },[]);

    return (
        <nav className={props.isFooter ? estilos.nav : estilos.footer}>
            <Link to='/'>TIENDA</Link>
            <ul>
                {props.isFooter ? (
                    <>
                        {categories.map((cat) => (
                            <NavLink key={cat.id} to={`/category/${cat.route}`}>
                                {cat.name}
                            </NavLink>
                        ))}
                    </>
                ): <Link to='/'>TIENDA</Link>
                }
            </ul>
            <Link to='/cart'>
                <CartWidget/>
            </Link>
        </nav>
    )
}

export default NavBar