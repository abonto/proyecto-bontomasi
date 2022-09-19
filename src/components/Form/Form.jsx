import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react'
import {db} from '../../firebaseConfig';

const Form = ({cart,total,clearCart,handleId}) => {
    
    const [nombre,setName] = useState('');
    const [apellido,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [telefono,setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            buyer: {nombre:nombre, apellido:apellido,email:email,telefono:telefono},
            items: cart,
            total: total,
            date: serverTimestamp()
        };

        const ordersCollection = collection(db,'orders');

        addDoc(ordersCollection,order)
        .then((res) => {
            handleId(res.id);
            clearCart();
        })
    };  

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    };

    const handlePhone = (event) => {
        setPhone(event.target.value);
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre' name='nombre' value={nombre} onChange={handleChangeName}/>
                <input type="text" placeholder='Apellido' name='apellido' value={apellido} onChange={handleChangeLastName}/>
                <input type="text" id='phone' placeholder='numero de telefono' value={telefono} onChange={handlePhone}/>
                <input type="email" name="email" id="email" value={email} onChange={handleEmail}/>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Form