import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
//import Products from '../../mock/products'
import ItemList from '../ItemList/ItemList'
import {collection,getDocs,query,where} from 'firebase/firestore';
import {db} from '../../firebaseConfig';

const ItemListContainer = ({saludo}) => {

  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const itemCollection = collection(db,"productos");
    const filter = query(itemCollection,where('category','==',`${categoryName}`));
    const itemList = categoryName ? filter: itemCollection;
    getDocs(itemList)
    .then((res) => {
        const products = res.docs.map((prod) => {
            return {
                id: prod.id,
                ...prod.data()
            }
        });
        setItems(products);
    })
    .catch((error) => {
        console.log(error)
    })
  },[categoryName]);

  return (
      <div>
          <h2 style={{ textAlign: 'center' }}>{saludo}</h2>
          <ItemList items={items} />
      </div>
  );
};

export default ItemListContainer;
