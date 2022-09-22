import { useState, useEffect } from "react"
import  ItemDetail  from "../ItemDetail/ItemDetail"
//import  Products  from "../../mock/products"
import { useParams } from "react-router-dom"
import { db } from "../../firebaseConfig"
import { getDoc,doc, collection } from "firebase/firestore"

export const ItemDetailContainer = () =>{
    const [item, setItem] = useState({});

    const { idProd } = useParams();

    useEffect(() => {
       const itemCollection = collection(db,"productos");
       const ref = doc(itemCollection,idProd);
       getDoc(ref)
       .then((res) => {
            setItem({
                id: res.id,
                ...res.data()
            })
       })
    }, [idProd]);

    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer;