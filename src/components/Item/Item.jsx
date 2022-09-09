import React from 'react'
import { Link } from 'react-router-dom'
import estilos from './Item.module.css';

/*{ <div>
<h3>{props.title}</h3>
<img src={props.img} alt="" width='360'/>
<p>${props.price}</p>
<p>Stock disponible: {props.stock}</p>
<ItemCount stock={props.stock} initial={1}/>
<Link to={`/item/${props.id}`}><button>+ detalles</button></Link>
</div> }*/

const Item = ({item}) => {
    return(
        <div className={estilos.card}>
            <img src={item.img} alt="" />
            <div className={estilos.info}>
                <h2>{item.title}</h2>
                <h4>${item.price}.-</h4>
                <h5>#{item.category}</h5>
                <Link
                    to={`/detail/${item.id}`}
                    style={{ textDecoration: 'none' }}
                >
                    <button>Ver detalles</button>
                </Link>
            </div>
        </div>
    )
}

export default Item