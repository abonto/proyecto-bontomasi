import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({item: { id, title, img ,price}}) => {
    return(
        <div>
            <img src={img} alt={id} width="350" />
            <h2>{title}</h2>
            <p>precio: {price}</p>
            <Link to={`category/${id}`}>
                <button>Ver detalles</button>
            </Link>
        </div>
    )
}

export default Item