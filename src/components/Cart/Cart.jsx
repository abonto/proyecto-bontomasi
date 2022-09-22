import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import FormCont from "../Form/FormCont";
import Button from "../Button/Button";

const Cart = () => {

    const [idCompra, setIdCompra] = useState("");
    const [form, setForm] = useState(false);
    const { cart, clear, removeItem, totalPrice } = useContext(CartContext);

    const total = totalPrice();

    const showForm = () => {
        setForm(true);
    };

    const handleId = (id) => {
        setIdCompra(id);
    };

    if (form && idCompra === "") {
        return (
            <FormCont cart={cart} total={total} clear={clear} handleId={handleId}/>
        );
    } else if (form && idCompra) {
        return (
            <p>El id de compra es es: {idCompra}</p>
        );
    }

    return (
        <>
            {cart.map((item) => {
                return (
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <p> Cantidad: {item.cantidad}</p>
                        <p>Precio: {item.price}</p>
                        <p>Subtotal: {item.cantidad * item.price} </p>
                        <button onClick={() => {
                        removeItem(item.id);
                        }}>Remover item</button>
                    </div>
                );
            })}

            {cart.length === 0 ? (
                <>
                    <div>
                        <p>Carrito se encuentra vacío</p>
                        <Link to="/">
                            <Button value="Ir a comprar" />
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <p>Total: $ {totalPrice()} </p>
                          <Link to="/">
                            <Button value="Seguir comprando" />
                          </Link>
                          <Button value="Vaciar carrito" func={clear} />
                          <Button value="Finalizar compra" func={showForm} />
                    </div>
                </>
            )}
        </>
    );
};

//     const {cart, clear, removeItem, totalPrice} = useContext(CartContext);
//     const [idCompra, setIdCompra] = useState('');
//     const [form, setForm] = useState(false);
//
//     const handleId = (id) => {
//         setIdCompra(id);
//     }
//
//     const showForm = () => {
//         setForm(true);
//     }
//
//     const total = totalPrice();
//
//     if (form && idCompra === '') {
//         return <FormCont cart={cart} handleId={handleId} clear={clear} total={total}/>
//     } else if (form && idCompra) {
//         return (
//             <>
//                 <h1>Gracias por comprar tu ID es: {idCompra}</h1>
//             </>
//         )
//     }
//
//     return (
//         <div>
//             {cart.map((item) => {
//                 return <>
//                     <div  key={item.id}>
//                         <h2>{item.title}</h2>
//                         <h2>${item.price}</h2>
//                         <h2>{item.cantidad}</h2>
//                     </div>
//                     <button onClick={() => removeItem(item.id)}>Remover Producto</button>
//                 </>;
//             })}
//             <button onClick={clear}>Vaciar carro</button>
//             <h4>Total: ${total}</h4>
//             <Form cart={cart} total={total} clearCart = {clear} handleId={handleId}/>
//         </div>
//     )
//
//     {cart.length === 0 ? (
//         <>
//             <h1>Carrito vacio</h1>
//             <Link to={'/'}>
//                 <Button value='Ir a comprar'/>
//             </Link>
//         </>
//     ):(
//         <p>Total es: ${totalPrice()}</p>
//         <Link to={'/'}><Button value='Ir a comprar'/></Link>
//             <Button value='Vaciar carrito' func={clear}/>
//             <Button value='Finalizar compra' func={showForm}/>
//
//     )}
//     )
//
// }

export default Cart