import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import estilos from './ItemDetail.module.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(0);

    const {addToCart,getProductQuantity} = useContext(CartContext);


    const onAdd = (cantidadItem) => {
        setCantidad(cantidadItem);
        addToCart(item,cantidadItem);
    };

    const quantity = getProductQuantity(item.id);

    return (
        <div className={estilos.detail}>
            <img src={item.img} alt={item.title} />
            <div className={estilos.info}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h3>${item.price}.-</h3>
                {cantidad === 0 ? (
                    <ItemCount stock={item.stock} initial={quantity} onAdd={onAdd} />
                ) : (
                    <Link to="/cart">Ir al carrito</Link>
                )}
            </div>
        </div>
    );
}

export default ItemDetail