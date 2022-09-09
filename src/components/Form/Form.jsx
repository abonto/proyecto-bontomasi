import React from 'react'
import { useState,useEffect } from 'react'

const Form = () => {

    const [nombre,setName] = useState('');
    const [apellido,setLastName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };  

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    };

    const handleMouseMove = () => {}


    useEffect(() => {
        window.addEventListener('mousemove',handleMouseMove);

        return () => {
            window.removeEventListener('mousemove',handleMouseMove);
        }

    }, []);
    
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre' name='nombre' value={nombre} onChange={handleChangeName}/>
                <input type="text" placeholder='Apellido' name='apellido' value={apellido} onChange={handleChangeLastName}/>
                <input type="number" id='edad' placeholder='edad'/>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Form