import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

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
        <div key={item.id}>
            <h3>{item.title}</h3>
            <h2>{item.description}</h2>
            <h3>${item.price}</h3>
            <img src={item.img} alt="" width="300"/>
            <Link to={`/item/${item.id}`}><button>+ detalles</button></Link>
        </div>
    )
}

export default Item