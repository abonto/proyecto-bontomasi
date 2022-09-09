import { useState, useEffect } from "react"
import  ItemDetail  from "../ItemDetail/ItemDetail"
import  Products  from "../../mock/products"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () =>{
    const [item, setItem] = useState({});

    const { idProd } = useParams();

    useEffect(() => {
        const getProduct = () =>
            new Promise((res, rej) => {
                const prod = Products.find(
                    (prod) => prod.id === Number(idProd)
                );
                setTimeout(() => {
                    res(prod);
                }, 500);
            });

        getProduct()
            .then((data) => {
                setItem(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [idProd]);

    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer;