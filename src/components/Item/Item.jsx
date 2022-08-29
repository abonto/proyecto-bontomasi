import React from 'react'

const Item = ({item: { id, title, img ,price}}) => {
    return(
        <div>
            <img src={img} alt={id} width="350" />
            <h2>{title}</h2>
            <p>precio: {price}</p>
        </div>
    )
}

export default Item