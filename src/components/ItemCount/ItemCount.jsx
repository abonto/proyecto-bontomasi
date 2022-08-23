import React,{useState} from 'react'

const ItemCount = ({initial,stock,onAdd}) => {
  
    const [count,setCount] = useState(initial);

    const addItem = () => count < stock && setCount(count+1);

    const removeItem = () => count > initial && setCount(count-1);

    return (
        <div>
            <div>
                <button onClick={addItem}>+</button>
                <p>{stock}</p>
                <p>Count: {count}</p>
                <button onClick={removeItem}>-</button>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount