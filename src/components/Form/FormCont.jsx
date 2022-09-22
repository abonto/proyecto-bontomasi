import React, {useState} from 'react';
import {db} from "../../firebaseConfig";
import {addDoc,collection,serverTimestamp} from 'firebase/firestore';
import Form from "./Form";

const FormCont = ({total,clear,handleId,cart}) => {

    const [name,setName] = useState("");
    const [email1,setEmail1] = useState("");
    const [email2,setEmail2] = useState("");
    const [phone,setPhone] = useState("");
    const [error,setError] = useState(null);

    const validate = name === "" || email1 === "" || email2 === "";

    const formValid = (event) => {
        event.preventDefault();
        if(!validate){
            if(email1 === email2){
                handleSubmit()
            }else{
                setError(true);
            }
        }
    }

    const handleSubmit = () => {
        const order = {
            buyer: {
                name: name,
                email: email1,
                phone: phone,
            },
            items: cart,
            total: total,
            date: serverTimestamp(),
        };

        const orderCollection = collection(db,'orders');

        addDoc(orderCollection,order).then((res) => {
            handleId(res.id);
            clear();
        });
    }

    const handleChangeEmail1 = (event) => {
        setEmail1(event.target.value);
    }

    const handleChangeEmail2 = (event) => {
        setEmail2(event.target.value);
    }

    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    }

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    return (
        <>
            <Form name={name} phone={phone} email1={email1} email2={email2} handleChangeName={handleChangeName}
                handleChangeEmail1={handleChangeEmail1} handleChangeEmail2={handleChangeEmail2}
                handleChangePhone={handleChangePhone} formValid={formValid}
            />
            {error && <p>Los mails deben ser iguales</p>}
        </>
    );
};

export default FormCont;