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

export default Cart