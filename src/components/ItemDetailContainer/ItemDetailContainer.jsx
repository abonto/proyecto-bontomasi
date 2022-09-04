import { useState, useEffect } from "react"
import  ItemDetail  from "../ItemDetail/ItemDetail"
import  Products  from "../../mock/products"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () =>{
    const [item, setItem] = useState({})

    const {id} = useParams();

    const numId = Number(id);

    useEffect(()=>{
        const getProduct = ()=> new Promise((res, rej)=>{

            const prodId = Products.find((prod)=> prod.id === numId);

            setTimeout(() => {res (prodId)}, 2000);
                
        });
        getProduct()
        .then((data)=>{
            setItem(data);
        })
        .catch((error)=>{
            console.log(error);   
        })

    }, [numId])
    return(
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer;