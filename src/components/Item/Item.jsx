import React from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
=======
import {Link} from 'react-router-dom'
>>>>>>> 2f2144b9521815de7713171ea00b6687e2e6b2d9

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
<<<<<<< HEAD
        <div key={item.id}>
            <h3>{item.title}</h3>
            <h2>{item.description}</h2>
            <h3>${item.price}</h3>
            <img src={item.img} alt="" width="300"/>
            <Link to={`/item/${item.id}`}><button>+ detalles</button></Link>
=======
        <div>
            <img src={img} alt={id} width="350" />
            <h2>{title}</h2>
            <p>precio: {price}</p>
            <Link to={`category/${id}`}>
                <button>Ver detalles</button>
            </Link>
>>>>>>> 2f2144b9521815de7713171ea00b6687e2e6b2d9
        </div>
    )
}

export default Item