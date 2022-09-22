import React from 'react'
import Button from "../Button/Button";

const Form = ({
        phone,
        name,
        email1,
        email2,
        handleChangeName,
        handleChangePhone,
        handleChangeEmail1,
        handleChangeEmail2,
        formValid,
    }) => {
         return (
             <>
                 <form action="" onSubmit={formValid}>
                     <h2>Completar datos para finalizar la compra</h2>
                     <label form="nombre">Ingresar nombre</label>
                     <input type="text" name="nombre" id="" value={name} onChange={handleChangeName} required/>
                     <label form="phone">Ingresar numero de telefono</label>
                     <input type="number" name="number" id="" value={phone} onChange={handleChangePhone} required/>
                     <label form="email">Ingresar correo electronico</label>
                     <input type="email" name="email1" id="" value={email1} onChange={handleChangeEmail1} required/>
                     <label form="email">Confirmar correo electronico</label>
                     <input type="email" name="email2" id="" value={email2} onChange={handleChangeEmail2} required/>
                     <Button value="Confirmar compra"/>
                 </form>
             </>
         )
}

export default Form